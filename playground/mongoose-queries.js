 const {ObjectID} = require('mongodb');
 const {mongoose} = require('./../server/db/mongoose.js');
 const {Todo} = require('./../server/models/todo.js');
 const {User} = require('./../server/models/user.js');

 var id = '5b27c0ec7307b2dc1dbc9bef';

 // if(!ObjectID.isValid(id)){
 //   return console.log('ID not valid');
 // }
 //
 // // Todo.find({
 // //   _id: id
 // // }).then((todos)=>{
 // //   console.log('Todos',todos);
 // // });
 // //
 // // Todo.findOne({
 // //   _id: id
 // // }).then((todo) =>{
 // //   console.log('Todo',todo)
 // // });
 //
 // Todo.findById(id).then((todo) =>{
 //   if(!todo){
 //     return console.log('ID not found');
 //   }
 //   console.log('Todo by ID',todo)
 // }).catch((e) => console.log(e));
 User.findById('5b27917c1b984774113c220e').then((user) => {
   if(!user){
     return console.log('ID not found');
   }
   console.log('Users by ID',user);
 }).catch((e) => console.log(e));
