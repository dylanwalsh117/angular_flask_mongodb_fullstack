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
