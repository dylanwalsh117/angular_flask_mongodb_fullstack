import flask
from mongoengine import ObjectIdField
from application  import db
from bson.objectid import ObjectId


# Creating data models for the interns first project.
class Sex(db.Document):
    _id = ObjectIdField(required=True, default=ObjectId, unique=True, primary_key=True)
    gender = db.StringField()


class Address(db.EmbeddedDocument):
    _id = ObjectIdField(required=True, default=ObjectId, unique=True, primary_key=True)
    number = db.IntField()
    street = db.StringField()
    city = db.StringField()
    eircode = db.StringField()


class Person(db.Document):
    _id = ObjectIdField()
    name = db.StringField()
    sex = db.ReferenceField(Sex, required=True)
    address = db.ListField(db.EmbeddedDocumentField(Address))
