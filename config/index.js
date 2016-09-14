var configValues = require('./config');

module.exports = {
  //mongo ds033066.mlab.com:33066/nodejs-todo-db -u <dbuser> -p <dbpassword>
  getDbConnectionString: function(){
    return 'mongodb://' +configValues.uname+
    ':'+configValues.pwd+'@ds033066.mlab.com:33066/nodejs-todo-db'
  }
}
