let {MongoClient, ObjectID} = require('mongodb'); // this uses object de-structuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => { // in v3 there's client instead of db
    if (err) {
        return console.log('Unable to connect to mongoDb server', err);
    }

    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp');

    // delete many
    // result: { n: 3, ok: 1 },
/*    db.collection('Todos').deleteMany({
        text: 'Eat lunch'
    }).then((result) => {
        console.log(result);
    });*/

    // delete one
/*    db.collection('Todos').deleteOne({
        text: 'Eat lunch'
    }).then((result) => {
        console.log(result);
    });*/


    // findOneAndDelete
/*    db.collection('Todos').findOneAndDelete({
        completed: true
    }).then((result) => {
        console.log(result);
    });*/


/*
    db.collection('Users').deleteMany({
        name: 'Michael'
    }).then((result) => {
        console.log(result);
    });

        db.collection('Users').deleteMany({
        name: 'Michael'
    });
*/

/*
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5c70f11be45c557760779513')
    }).then((result) => {
        console.log(result);
    });
*/

//    client.close();
});