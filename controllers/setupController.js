

//var Todos = require('../models/todoModel')
var Model = require('../models/todoModel');


// module.exports = function(app) {
//
//    app.get('/create', function(req, res) {
//
//        // seed database
//        var results = [
//         {
//             'username' : 'nipun',
//             'todo' : 'nothing'
//         }
//        ];
//
//        Model.create(starterModel, function(err, results) {
//            res.send(error);
//        });
//        res.send('bottom');
//    });
//
// }
module.exports = function(app) {

   app.get('/create', function(req, res) {

       // seed database
       var results = [
               {
                   'username' : 'nipun',
                   'todo' : 'nothing'
               }
        ];
       Model.create(results, function(err, results) {
           res.send(results);
       });
   });

}
