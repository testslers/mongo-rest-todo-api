let {MongoClient, ObjectID} = require('mongodb'); // this uses object de-structuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => { // in v3 there's client instead of db
    if (err) {
        return console.log('Unable to connect to mongoDb server', err);
    }

    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate(
        {_id: new ObjectID('5c70e12553975e401ce255a0')},
        {
            $set: {
                completed: true
            }
        },
        { returnOriginal: false }
    ).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('5c70e5a7003b586f80134136')},
        {
            $set: {
                location: 'Bunker'
            },
            $inc: {
                age: 1
            }
        },
        { returnOriginal: false }
    ).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    });

    client.close();
});