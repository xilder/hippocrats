#!/usr/bin/python3
"""
Explanation class, inherits from BaseModel
"""
from models.base_model import BaseModel

class Question(BaseModel):
    """
    Explanation class, inherits from BaseModel

    Attributes:
        user_id (str): id the of the user that linked to the question
        question_id (str): links 
        explanation_text (str): question text
    """
    user_id = ""
    question_id = ""
    explanation_text = ""