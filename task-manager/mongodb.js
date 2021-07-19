const mongodb = require('mongodb');
const { MongoClient, ObjectID } = mongodb;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database');
  }

  const db = client.db(databaseName);

  //db.collection('tasks').deleteOne()

  // db.collection('users').deleteMany({
  //   age: 30
  // }).then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error);
  // })

  // const updatePromise = db.collection('tasks').updateMany({}, {
  //   $set: {
  //     completed: true
  //   }
  // });

  // updatePromise.then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error);
  // })

  // const updatePromise = db.collection('users').updateOne({ _id: new ObjectID('603cf0d89ff5a2ee8b513baf') }, {
  //   $inc: {
  //     age: 1
  //   }
  // });

  // updatePromise.then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error);
  // })


  // db.collection('users').findOne({ _id: new ObjectID('603da1f5b25627ed7b1ce0d0') }, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch');
  //   }
  //   console.log(user);
  // });

  // db.collection('users').find({ age: 30 }).toArray((error, users) => {
  //   console.log(users);
  // });

  // db.collection('users').insertOne({ _id: id, name: 'Josh', age: '42' }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user');
  //   }

  //   console.log(result.ops);
  // });

  // db.collection('users').insertMany([{ name: 'Jim', age: 30 }, { name: 'Dwight', age: 30 }], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents');
  //   }
  //   console.log(result.ops);

  // });
  // db.collection('tasks').insertMany([{ description: 'Clean your house', completed: true }, { description: 'Clean your car', completed: true }, { description: 'Clean your windows', completed: false }], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents');
  //   }
  //   console.log(result.ops);

  // });
});

