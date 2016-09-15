
var mongoose = require('mongoose');

//var Schema = mongoose.Schema;


var todoSchema = new mongoose.Schema({
  'username': String,
  'todo': String
},{ collection: 'data' });

var model = mongoose.model('data',todoSchema);

module.exports = model;
