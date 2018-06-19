 const {ObjectID} = require('mongodb');
 const {mongoose} = require('./../server/db/mongoose.js');
 const {Todo} = require('./../server/models/todo.js');
 const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '5b27d9d7618d0e580c15db7c'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5b27d9d7618d0e580c15db7c').then((todo) => {
  console.log(todo);
});
