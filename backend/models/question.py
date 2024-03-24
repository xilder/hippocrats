#!/usr/bin/python3
"""
Question class, inherits from BaseModel
"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.orm import relationship
from os import getenv

class Question(BaseModel, Base):
    """
    Question class, inherits from BaseModel

    Attributes:
        user_id (str): links the question to the user
        clinical (str): clinical or non_clinical
        course (str): course title
        sub_course (str): sub_course
        type (str): question type
        text (str): question text
    """
    if getenv("ENV_DB") == "db":
        __tablename__ = "questions"
        user_id = Column(String(60), ForeignKey("users.id"), nullable=False)
        course = Column(String(20), nullable=False)
        type = Column(String(10), nullable=False)
        text = Column(String(4096), nullable=False)
        explanations = relationship("Explanation", backref="question")
        options = relationship("Option", backref="question")
    else:
        user_id = ""
        course = ""
        type = ""
        text = ""