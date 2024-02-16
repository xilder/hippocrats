#!/bin/bash/python3
"""api app"""
from config import ApplicationConfig
from flask import Flask, abort, make_response, jsonify
from flask_cors import CORS
from flask_session import Session
from api.v1.views import app_views
from models import storage

app = Flask(__name__)
app.config.from_object(ApplicationConfig)
session_app = Session(app)
cors = CORS(app, resources={r"/api/v1/*": {"origins": "*"}})

app.register_blueprint(app_views)


@app.teardown_appcontext
def close_db(obj):
    """close storage"""
    storage.close()

@app.errorhandler(404)
def page_not_found(err):
    """handle error 404"""
    return make_response(jsonify(error="Not found"), 404)

@app.route("/")
def hello():
    return "<p>Hello World</p>"

if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True, threaded=True)