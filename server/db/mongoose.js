var mongoose = require('mongoose');



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://hornkristof94:123456aA@ds263460.mlab.com:63460/kiki' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
