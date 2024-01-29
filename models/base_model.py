#!usr/bin/python3
"""base model"""
from datetime import datetime
import models
from uuid import uuid4

class BaseModel:
    """
    The base model class
    from which all subclasses inherit
    """

    def __init__(self, *args, **kwargs):
        """
        Initialises an instance of the base model class
        
        Args:
            args: unused
            kwargs (dict): key/value pairs of attributes
        """
        if len(kwargs) == 0:
            self.id = str(uuid4())
            self.created_at = self.updated_at = datetime.now()
            models.storage.new(self)
        else:
            for k, v in kwargs.items():
                if k != "__class__":
                    if k == "created_at" or k == "updated_at":
                        setattr(self, k, datetime.fromisoformat(v))
                    else:
                        setattr(self, k, v)
            models.storage.save(self)

    def save(self):
        """
        saves the object instance created in the
        storage engine
        """
        self.updated_at = datetime.now()
        models.storage.save()



    def __str__(self):
        """
        Prints a string representation of an instance
        of the class
        """
        cls_name = self.__class__.__name__
        return f"[{cls_name}]\t({self.id})\n{self.__dict__}"
    
    def to_dict(self):
        """
        returns a dictionary representation of
        the object
        """
        obj_dict = self.__dict__.copy()
        obj_dict["created_at"] = self.created_at.isoformat()
        obj_dict["updated_at"] = self.updated_at.isoformat()
        obj_dict["__class__"] = self.__class__.__name__
        return obj_dict