#!/usr/bin/python3
"""
User class that inherits from BaseModel
"""
from models.base_model import BaseModel

class User(BaseModel):
    """
    User class inherits from the BaseModel
    
    Attributes:
        first_name (str): first name
        last_name (str): last name
        email (str): email
        password(str): password
    """

    first_name = ""
    last_name = ""
    email = ""
    password = ""
    