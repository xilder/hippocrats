#!/usr/bin/python3
"""User methods module"""
from api.v1.views import app_views
from models.user import User
from models import storage
from flask import abort, jsonify, request, make_response
from flask import session


@app_views.route("/register", methods=["POST"])
def register():
    """registers new user"""

    if not request.get_json():
        return make_response(jsonify({"error": "Not a JSON"}), 400)
    new_user = request.get_json()
    
    if storage.get_by_username_email(new_user["user_name"]):
        return make_response(jsonify({"error": "username already exists"}), 409)
    
    if storage.get_by_username_email(new_user["email"]):
        return make_response(jsonify({"error": "email already exists"}), 409)

    user = User(**new_user)
    user.save()
    return make_response(jsonify(user.to_dict()), 201)


@app_views.route("/login", methods=["POST"])
def login():
    """login by email or username"""
    error = None
    if request.get_json() is None:
        return make_response(jsonify({"error": "Not a JSON"}), 400)
    
    user_obj = request.get_json()
    username = user_obj.get("data", None)
    password = user_obj.get("password", None)

    user = storage.get_by_username_email(username)
    if not user:
        error = "Invalid username or email"
    elif user["password"] != password:
        error = "Invalid password"

    if error is None:
        session["user_id"] = user["id"]
        return make_response(jsonify(user), 200)
    return make_response(jsonify({"error": error}), 401)


@app_views.route("/@me", methods=["GET"])
def get_current_user():
    """keeps a user logged in"""
    user_id = session.get("user_id")

    if not user_id:
        return make_response(jsonify({"error": "unauthorised"}), 401)
    
    user = storage.get("User", user_id)
    del user["password"]
    return make_response(jsonify(user), 200)


@app_views.route("/logout", methods=["GET"])
def logout_user():
    """logs out a user"""
    session.pop("user_id")
    return "200"

@app_views.route("/users", methods=["GET"])
def get_users():
    """gets all the users available"""
    user_objs = storage.all("User").values()
    list_users = [user.to_dict() for user in user_objs]
    return make_response(jsonify(list_users), 200)


@app_views.route("/delete/<user_id>", methods=["GET"])
def delete_user(user_id):
    """deletes a user"""
    user = storage.get("User", user_id)
    user.delete()
    storage.save()
    return make_response(jsonify({}), 200)