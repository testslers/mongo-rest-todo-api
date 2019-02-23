//const MongoClient = require('mongodb').MongoClient;
//const MongoClient = require('mongodb');
//let {MongoClient, ObjectID} = require('mongodb'); // this uses object de-structuring
let {MongoClient, ObjectID} = require('mongodb'); // this uses object de-structuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => { // in v3 there's client instead of db
    if (err) {
        return console.log('Unable to connect to mongoDb server', err);
    }

    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp');


    /*  // Simple read
      db.collection('Todos').find() // finds returns a MongoDb cursor
            .toArray() // returns a promise of an Array
            .then((docs) => {
                console.log('Todos' + JSON.stringify(docs, undefined, 4)); // underfined - filter, 2 - spacing

            }, (err) => {
                console.log('Unable to fetch todos');
            });*/

    //db.collection('Todos').find({completed: false}) // finds returns a MongoDb cursor
    /*db.collection('Todos').find({
        _id: new ObjectID('5c70e12553975e401ce255a0')
    }) // finds returns a MongoDb cursor
        .toArray() // returns a promise of an Array
        .then((docs) => {
            console.log('Todos\n' + JSON.stringify(docs, undefined, 4)); // underfined - filter, 2 - spacing

        }, (err) => {
            console.log('Unable to fetch todos');
        });*/

/*    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);

    }, (err) => {
        console.log('Unable to fetch todos');
    });*/

    db.collection('Users').find({
        name: 'Castiel'
    }) // finds returns a MongoDb cursor
        .toArray() // returns a promise of an Array
        .then((docs) => {
            console.log('Users\n' + JSON.stringify(docs, undefined, 4)); // underfined - filter, 2 - spacing

        }, (err) => {
            console.log('Unable to fetch users');
        });

    // client.close();
});