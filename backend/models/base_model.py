#!usr/bin/python3
"""base model"""
from datetime import datetime
import models
from os import getenv
from uuid import uuid4
from sqlalchemy import Column, String, DateTime
from sqlalchemy.ext.declarative import declarative_base

time = "%Y-%m-%dT%H:%M:%S.%f"

if getenv("ENV_DB") == "db":
    Base = declarative_base()
else:
    Base = object

class BaseModel:
    """
    The base model class
    from which all subclasses inherit
    """
    if getenv("ENV_DB") == "db":
        id = Column(String(60), primary_key=True, nullable=False)
        created_at = Column(DateTime, nullable=False, default=datetime.utcnow)
        updated_at = Column(DateTime, nullable=False, default=datetime.utcnow)

    def __init__(self, *args, **kwargs):
        """
        Initialises an instance of the base model class
        
        Args:
            args: unused
            kwargs (dict): key/value pairs of attributes
        """
        if not kwargs:
            self.id = str(uuid4())
            self.created_at = self.updated_at = datetime.utcnow()
            models.storage.new(self)
        else:
            for k, v in kwargs.items():
                if k != "__class__":
                    setattr(self, k, v)
            if kwargs.get("created_at", None) and type(self.created_at) is str:
                self.created_at = datetime.strptime(kwargs["created_at"], time)
            else:
                self.created_at = datetime.utcnow()
            if kwargs.get("updated_at", None) and type(self.updated_at) is str:
                self.updated_at = datetime.strptime(kwargs["updated_at"], time)
            else:
                self.updated_at = datetime.utcnow()
            if kwargs.get("id", None) is None:
                self.id = str(uuid4())
            self.save()

    def save(self):
        """
        saves the instance created
        """
        models.storage.new(self)
        self.updated_at = datetime.now()
        models.storage.save()

    def delete(self):
        """
        deletes itself
        """
        models.storage.delete(self)

    def __str__(self):
        """
        string representation of an instance
        """
        cls_name = self.__class__.__name__
        return f"[{cls_name}]\t({self.id})\n{self.to_dict()}"

    def to_dict(self):
        """
        dictionary representation of the object
        """
        new_dict = self.__dict__.copy()
        if "created_at" in new_dict:
            new_dict["created_at"] = new_dict["created_at"].strftime(time)
        if "updated_at" in new_dict:
            new_dict["updated_at"] = new_dict["updated_at"].strftime(time)
        new_dict["__class__"] = self.__class__.__name__
        for key in ["created_at", "_sa_instance_state", "__class__"]:
            if key in new_dict:
                del new_dict[key]
        # if "password" in new_dict:
        #         del new_dict["password"]
        return new_dict
