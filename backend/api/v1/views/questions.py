#!/usr/bin/python3
"""Questions methods module"""
from api.v1.views import app_views
from models.question import Question
from models import storage
from flask import jsonify, abort, request, make_response

@app_views.route("/questions/", methods=["GET"])
def get_questions():
    """get questions in a particular course"""
    all_questions = storage.all("Question").values()
    list_questions = [question.to_dict() for  question in all_questions]
    return list_questions

@app_views.route("/questions/<course>/", methods=["GET"])
def get_courses(course):
    """get questions by courses"""
    all_questions = storage.all("Question").values()
    list_questions = [question.to_dict() for  question in all_questions
                      if question.to_dict()["course"] == course]
    return jsonify(list_questions)

@app_views.route("/questions/<id>", methods=["DELETE"])
def delete_question(id):
    question = storage("Question", id)
    if question is None:
        abort(404)
    storage.delete(question)
    storage.save()
    return make_response(jsonify({}), 200)

# @app_views.route("/questions", methods=["POST"])
# def post_questions():
#     """store new questions"""
#     if not request.json():
#         return make_response(jsonify({"error": "Not a JSON"}), 400)
#     question_obj = request.json()
#     question = Question(**question_obj)
#     question.save()
#     return make_response(jsonify(question.to_dict()), 201)

# @app_views.route("/questions/<id>", methods=("PUT"))
# def put_questions(id):
#     question = storage.get("Question", id)
#     if question is None:
#         abort(404)
#     if not request.json():
#         return make_response(jsonify({"error": "Not a JSON"}))
#     for k, v in request.json().items():
#         if k not in ["id", "created_at", "updated_at"]:
#             setattr(question, k, v)
#     return make_response(jsonify(question.to_dict()), 200)