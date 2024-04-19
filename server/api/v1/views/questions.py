#!/usr/bin/python3
"""Questions methods module"""
from api.v1.views import app_views
from models.question import Question
from models import storage
from flask import jsonify, abort, request, make_response
from random import choices
from pprint import pprint

@app_views.route("/questions/", methods=["GET"])
def get_questions():
    """get questions in a particular course"""
    all_questions = storage.all("Question").values()
    list_questions = [question.to_dict() for  question in all_questions]
    return list_questions

@app_views.route("/questions/<course>/<type>/<number>", methods=["GET"])
def get_courses(course, type, number):
    """get questions by courses"""
    all_questions = list(storage.all("Question").values())
    all_questions = choices(all_questions, k=int(number))

    list_questions = []
    for question in all_questions:
        if (question.course == course and question.type == type):
            question_obj = question.to_dict()
            del question_obj["course"]
            del question_obj["type"]
            question_obj["options"] = []
            for option in question.options:
                op = option.to_dict()
                del op["user_id"]
                question_obj["options"].append(op)
            for explanation in question.explanations:
                ex = explanation.to_dict()
                del ex["user_id"]
                question_obj["explanation"] = ex
            list_questions.append(question_obj)
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