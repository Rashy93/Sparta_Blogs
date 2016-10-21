var React = require("react");
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Dispatcher = require("../dispatchers/appDispatcher.js")
var AppStore = require("../stores/appStore.js");
var hashHistory = require('react-router').hashHistory;
var browserHistory = require('react-router').browserHistory;
var AppStore = require('../stores/appStore');
var Dispatcher = require('../dispatchers/appDispatcher');

var Login = React.createClass({
  getInitialState : function(){
    return {
      username : '',
      password : '',
      status   : AppStore.getRegister(),
    }
  },
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

  onClickLogin : function(e){
    Dispatcher.dispatch({
          data : {
            username : this.state.username,
            password : this.state.password
          },
          action : 'login'
        })

        AppStore.on("login", function() {
                  this.setState({
                    status: true
                  })
                }.bind(this))

                console.log(this.state.status  +  '--------------->react');




  },
  render: function() {

    if(this.state.status){
      localStorage.setItem('myFirstKey', 'Hello world');
      browserHistory.push('/#/posts')
    }



return (
<div>
    <h4>Login:</h4>
    <div className="card-panel hoverable">
      <div className="container">
        <div className="col m9">
          <form>
            Username:<br/>
              <input type="text" name="username" onChange={this.getUsernameData}/>
                <br/>
                  Password:<br/>
              <input type="text" name="password" onChange={this.getPasswordData}/>
              <br/><br/>
            <input type="submit" value="Submit" onClick={this.onClickLogin} />
          </form>
        </div>
      </div>
    </div>
</div>

      )
    }
})

module.exports = Login;
