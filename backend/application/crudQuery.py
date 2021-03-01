from bson import ObjectId

from application.models import Person


def query_aggregate():
    return list(Person.objects.aggregate(*[
        {
            '$lookup':
                {
                    'from': 'sex',
                    'localField': 'sex',
                    'foreignField': '_id',
                    'as': 'sex'
                }
        },
        {
            '$unwind':
                {
                    'path': '$sex'
                }
        },
        {
            '$unwind':
                {
                    'path': "$address"
                }
        },
        {
            '$project':
                {
                    '_id': 0,
                    'id': {'$toString': '$_id'},
                    'name': 1,
                    'sex': '$sex.gender',
                    'address': {
                        '$concat': [
                            {
                                '$toString': '$address.number'

                            },
                            ' ',
                            '$address.street', ', ', '$address.city']

                    }
                }
        }
    ]))



def form_query(person_id):
    return list(Person.objects.aggregate(*[

        {
            '$lookup': {
                'from': 'sex',
                'localField': 'sex',
                'foreignField': '_id',
                'as': 'sex'
            }
        },
        {
            '$unwind': {
                'path': '$sex'
            }
        },
        {
            '$unwind': {
                'path': '$address'
            }
        },
        {

            '$match': {'_id': ObjectId(person_id)}
        },
        {
            '$project': {
                '_id': 0,
                'id': {'$toString': '$_id'},
                'name': 1,

                'sex': {

                    'id': {'$toString': '$sex._id'},
                    'gender': '$sex.gender'
                },

                'address': {
                    'id': {'$toString': '$address._id'},
                    'number': '$address.number',
                    'street': '$address.street',
                    'city': '$address.city',
                    'eircode': '$address.eircode'
                }
            }
        }
    ]))
