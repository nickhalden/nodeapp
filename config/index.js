var configValues = require('./config');

module.exports = {
  //mongo ds033066.mlab.com:33066/nodejs-todo-db -u <dbuser> -p <dbpassword>
  getDbConnectionString: function(){
    return   'mongodb://test:test@ds033066.mlab.com:33066/nodejs-todo-db';
  }
}
