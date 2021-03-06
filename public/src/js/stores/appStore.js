var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var axios = require('axios');
var Dispatcher = require('../dispatchers/appDispatcher.js');

var register = false;
var login = false;


var AppStore = merge(EventEmitter.prototype, {
  getRegister : function(){
    return register;
  },
  getLogin : function(){
    return login;
  }
})

module.exports = AppStore;




Dispatcher.register(handleAction);
function handleAction(payload) {
  var self = this;

  if(payload.action === 'login'){

    axios.post('/login', {
      username: payload.data.username,
      password: payload.data.password
    })
    .then(function (response) {

     if(response.data === 'LOGIN'){
       AppStore.emit("login");
       console.log('user is logied in sucess');
     }

    })
    .catch(function (error) {
      console.log(error);
    });
  }else if(payload.action === 'register'){

    axios.post('/register', {
      username: payload.data.username,
      password: payload.data.password
    })
    .then(function (response) {
      // register = true
      AppStore.emit("register");
      console.log(response.data)

    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
