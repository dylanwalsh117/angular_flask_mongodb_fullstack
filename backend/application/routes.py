from bson import ObjectId
from flask import Flask, jsonify, request
from flask_restplus import Api, Resource, fields
from flask_mongoengine import MongoEngine
from flask_cors import CORS
from config import Config
from application import app, api, crudQuery
from application.models import Person, Address, Sex


@api.route('/api', '/api/')
class PersonAll(Resource):
    def get(self):
        return jsonify(crudQuery.query_aggregate())

    def post(self):

        field_insert = api.payload
        Person(name=field_insert['name'], sex=Sex(_id=field_insert['sex']),
               address=[Address(number=field_insert['houseNumber'], street=field_insert['street'],
                                city=field_insert['city'], eircode=field_insert['eircode'])]).save()

@api.route('/api/<api_id>')
class PersonByID(Resource):
    def get(self, api_id):
        try:
            return jsonify(crudQuery.form_query(api_id))
        except Exception as e:
            return jsonify({'response': 'Sorry, the user id provided does not exist'})


    def delete(self, api_id):
        Person.objects(_id=api_id).delete()
        return jsonify(Person.objects(_id=api_id))

    def put(self, api_id):
        data = api.payload
        print(data)
        data['sex'] = ObjectId(data['sex'])
        Person.objects(_id=api_id).update(**data)
        return jsonify(Person.objects(_id=data['_id']))
