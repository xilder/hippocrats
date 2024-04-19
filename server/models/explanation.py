#!/usr/bin/python3
"""
Explanation class, inherits from BaseModel
"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, ForeignKey
from os import getenv

class Explanation(BaseModel, Base):
    """
    Explanation class, inherits from BaseModel

    Attributes:
        user_id (str): id the of the user that linked to the question
        question_id (str): links 
        text (str): question text
    """
    if getenv("ENV_DB") == "db":
        __tablename__ = "explanations"
        user_id = Column(String(60), ForeignKey("users.id"), nullable=False)
        question_id = Column(String(60), ForeignKey("questions.id"), nullable=False)
        text = Column(String(4096))
    else:
        user_id = ""
        question_id = ""
        text = ""