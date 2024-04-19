#!/usr/bin/python3
"""
User class that inherits from BaseModel
"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String
from hashlib import md5
from os import getenv

class User(BaseModel, Base):
    """
    User class inherits from the BaseModel
    
    Attributes:
        first_name (str): first name
        last_name (str): last name
        email (str): email
        password(str): password
    """
    if getenv("ENV_DB") == "db":
        __tablename__ = "users"
        first_name = Column(String(128), nullable=False)
        last_name = Column(String(128), nullable=False)
        username = Column(String(128), nullable=False)
        email = Column(String(128), nullable=False)
        password = Column(String(128), nullable=False)
    else:
        first_name = ""
        last_name = ""
        user_name = ""
        email = ""
        password = ""

    def __setattr__(self, k, v):
        """sets user password"""
        if k == "password":
            v = md5(v.encode()).hexdigest()
        super().__setattr__(k, v)