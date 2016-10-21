var User = require("./users.jsx");
var React = require("react");
var AppDispatcher = require("../dispatchers/appDispatcher");
var BlogUser = require("../stores/users.js");


var UserList = React.createClass({
  getInitialState: function() {

    return {
      users: BlogUser.getUsers()
   }
},
  componentDidMount: function() {
    BlogUser.on("tang", function() {
      console.log("tang")
      this.setState({
        users: BlogUser.getUsers()
      })
    }.bind(this))
  },

render: function() {
  return (
    <div className="content">
        <div className="row">
          {
            this.state.users.map(function(user, i){
              return (
                <User key={i} user={user}/>
              )
            })
          }
        </div>
    </div>
  )
}
});

module.exports = UserList;
