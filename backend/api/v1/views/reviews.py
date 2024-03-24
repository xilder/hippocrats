#!/usr/bin/python3
"""User methods module"""
from api.v1.views import app_views
from models.review import Review
from models import storage
from flask import abort, jsonify, request, make_response

@app_views.route("/reviews", methods=["POST"])
def save_review():
    """save new reviews"""
    new_review = request.get_json()
    review = Review(**new_review)
    review.save()

    return make_response(jsonify(review.to_dict()), 200)

@app_views.route("/get_reviews", methods=["GET"])
def get_review():
    """get all reviews"""
    all_reviews = storage.all("Review").values()
    list_reviews = []
    for review in all_reviews:
        review_obj = review.to_dict()
        del review_obj["id"]
        list_reviews.append(review_obj)
    
    return make_response(jsonify(list_reviews), 200)
