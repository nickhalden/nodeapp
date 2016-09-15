

//var Todos = require('../models/todoModel')
var Model = require('../models/todoModel');


module.exports = function(app) {

   app.get('/create', function(req, res) {

       // seed database
       var results = [
               {
                   'username' : 'nipun',
                   'todo' : 'Learn Nodejs'
               },
               {
                   'username' : 'nipun',
                   'todo' : 'Buy Milk'
               },
               {
                   'username' : 'nipun',
                   'todo' : 'Read Novels'
               }
        ];
       Model.create(results, function(err, results) {
           res.send(results);
       });
   });

}
