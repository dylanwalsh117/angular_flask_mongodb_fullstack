from flask import Flask, jsonify, request
from flask_restplus import Api, Resource, fields
from flask_mongoengine import MongoEngine
from flask_cors import CORS
from config import Config


app = Flask(__name__)
app.config.from_object(Config)
api = Api(app=app, doc="/hello", title="Api_CRUD-APP")
CORS(app)
db = MongoEngine(app=app)

from application import routes

if __name__ == '__main__':
    app.run()