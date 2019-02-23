//const MongoClient = require('mongodb').MongoClient;
//const MongoClient = require('mongodb');
//let {MongoClient, ObjectID} = require('mongodb'); // this uses object de-structuring
let {MongoClient, ObjectID} = require('mongodb'); // this uses object de-structuring

/*
let obj = new ObjectID(); // This creates a mongo object id
console.log(obj);
*/


/* // Object de-structuring - a cool name to make objects from objects' properties
let user = {name: 'andrew', age: 25};
var {name} = user;
console.log(name);
*/

// (node:8540) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => { // in v3 there's client instead of db
    if (err) {
        return console.log('Unable to connect to mongoDb server', err);
    }

    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp');

/*
    db.collection('Todos').insertOne({
            text: 'A shinier and newer record',
            completed: false
        },
        (err, result) => {
            if (err) {
                return console.log('Unable to insert todo', err);
            }

            console.log(JSON.stringify(result.ops, undefined, 2));
        });
*/

/*
    db.collection('Users').insertOne({
            // _id: 1, // Mongo will give an id but we can also use the one created by Mongo by default
            name: 'Gabriel',
            age: '99999998',
            location: 'Earth'
        },
        (err, result) => {
            if (err) {
                return console.log('Unable to insert a record', err)
            }

            console.log(JSON.stringify(result.ops, undefined, 2))
            //console.log(result.ops[0]._id);
            console.log(result.ops[0]._id.getTimestamp());
        }
    );
*/

    client.close();
});