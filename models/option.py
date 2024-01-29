#!/usr/bin/python3
"""
Option class, inherits from BaseModel
"""
from models.base_model import BaseModel

class Option(BaseModel):
    """
    Option class, inherits from BaseModel

    Attributes:
        user_id (str): links the option to the user
        question_id (str): links the option to the question
        option (str): option
        option_text (str): option text 
    """
    user_id = ""
    question_id = ""
    option = ""
    option_text = ""