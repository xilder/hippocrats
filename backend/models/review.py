#!/usr/bin/python3
"""
User class that inherits from BaseModel
"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String
from hashlib import md5
from os import getenv

class Review(BaseModel, Base):
    """
    User class inherits from the BaseModel
    
    Attributes:
        first_name (str): first name
        last_name (str): last name
        email (str): email
        password(str): password
    """
    if getenv("ENV_DB") == "db":
        __tablename__ = "reviews"
        name = Column(String(128), nullable=False)
        email = Column(String(128), nullable=False)
        suggestion = Column(String(1028), nullable=False)
    else:
        name = ""
        email = ""
        suggestion = ""