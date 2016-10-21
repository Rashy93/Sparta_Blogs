var React = require("react");
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var browserHistory = require('react-router').browserHistory;
var AppStore = require('../stores/appStore');
var Dispatcher = require('../dispatchers/appDispatcher');

// get register function
var Register = React.createClass({
  getInitialState : function(){
    return {
      username: String,
      password: String,
      email: String,
      status: AppStore.getRegister(),
  }
},
// onchange as the field changes the information is being saved
getUsernameData : function(e){
  this.setState({
    username : e.target.value
  });
  },
getPasswordData : function(e){
  this.setState({
    password : e.target.value
  });
},
getEmailData : function(e){
  this.setState({
    email : e.target.value
  });
  },
// Gets the username and password and tells the AppStore to register
onClickRegister : function(e){
  console.log('click');
  Dispatcher.dispatch({
        data : {
          username : this.state.username,
          password : this.state.password
        },
        action : 'register'
      })

// This determins whether the user is registered or not

      AppStore.on("register", function() {
                this.setState({
                  status: true
                })
              }.bind(this))


          e.preventDefault();



  },
  render: function() {
    return (
<div>
  <h4>Register:</h4>
    <div className="card-panel hoverable">
      <div className="container">
        <div className="col m9">
          <form>
            Username:<br/>
              <input type="text" name="username" onChange={this.getUsernameData}/>
                <br/>
                  Email:<br/>
                <input type="text" name="email" onChange={this.getEmailData}/>
                  <br/>
                  Password:<br/>
              <input type="text" name="password" onChange={this.getPasswordData}/>
              <br/><br/>
            <input type="submit" value="Submit" onClick={this.onClickRegister}/>
          </form>
        </div>
      </div>
    </div>
</div>

    )
  }
});
module.exports = Register;
