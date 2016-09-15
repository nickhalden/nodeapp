
var mongoose = require('mongoose');

//var Schema = mongoose.Schema;


var todoSchema = new mongoose.Schema({
  'username': String,
  'todo': String
},{ collection: 'data' });

var model = mongoose.model('data',todoSchema);

module.exports = model;
//'mongodb://127.0.0.1:27017/checkout/data


// var Schema = new mongoose.Schema({
//  'orderId'                 : String,
//  'buyerInfo'               : JSON,
//  'purchaseContractLocation': JSON,
//  'version'                 : String,
//  'purchaseContractItems'   : JSON,
//  'createdDate'             : String
// },{ collection: 'data' });
//
//
// var model = mongoose.model('data', Schema);
//
// module.exports = model;
