// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //findOneAndUpdate

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b277613618d0e580c158f8d')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((res)=> {
  //   console.log(res);
  // })
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b277735618d0e580c15901f')
  }, {
    $set: {
      name: 'Kiki'
    },
    $inc:{
      age: 2
    }
  },{
    returnOriginal: false
  }).then((res)=> {
    console.log(res);
  })

  // db.close();
});
