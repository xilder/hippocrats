#!/usr/bin/python3
"""
Question class, inherits from BaseModel
"""
from models.base_model import BaseModel

class Question(BaseModel):
    """
    Question class, inherits from BaseModel

    Attributes:
        user_id (str): links the question to the user
        clinical (int): 1 represents a clinical question,
            0 non-clinical question
        course (str): course title
        question_type (str): question type
        question_text (str): question text
    """
    user_id = ""
    clinical = 0
    course = ""
    question_type = ""
    question_text = ""