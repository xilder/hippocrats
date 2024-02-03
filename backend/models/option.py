#!/usr/bin/python3
"""
Option class, inherits from BaseModel
"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, ForeignKey
from os import getenv

class Option(BaseModel, Base):
    """
    Option class, inherits from BaseModel

    Attributes:
        user_id (str): links the option to the user
        question_id (str): links the option to the question
        option (str): option
        option_text (str): option text 
    """
    if getenv("ENV_DB") == "db":
        __tablename__ = "options"
        user_id = Column(String(60), ForeignKey("users.id"), nullable=False)
        question_id = Column(String(60), ForeignKey("questions.id"), nullable=False)
        option = Column(String(1), nullable=False)
        option_text = Column(String(256), nullable=False)
        valid = Column(String(1), nullable=False)
    else:
        user_id = ""
        question_id = ""
        option = ""
        option_text = ""
        valid = ""