#!/bin/bash/python3
"""api app"""
from flask import Flask, abort, make_response, jsonify
from api.v1.views import app_views
from models import storage

app = Flask(__name__)
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