

var Todos = require('../models/todoModel')


module.exports = function (){
  app.get('/api/setupTodos',function(req,res){

    //seed database
    var starterTodos = [
      {
        username: 'test',
        todo: 'Buy Milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'nipun',
        todo: 'Buy Books',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Learn new languages',
        isDone: false,
        hasAttachment: false
      }
    ]

  });

}
