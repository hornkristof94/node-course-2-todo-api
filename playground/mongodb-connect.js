// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Somthing to do',
  //   completed: false
  // },(err,result) => {
  //   if (err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


// Insert new doc into Users(name:Kiki,age,23, location)
  // db.collection('Users').insertOne({
  //   name: 'Kiki',
  //   age: 23,
  //   location: 'Budapest'
  // },(err,result) =>{
  //   if(err){
  //     return console.log('Unable to insert Users', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
  // });
  db.close();
});
