var React = require("react");
var Dispatcher = require("../dispatchers/appDispatcher.js")

var Button = React.createClass({

  handleClick: function() {
    this.setState({
      users: BlogUser.getUsers()
    });
  },

  render: function() {
    return (
      <button onClick={this.handleClick}>View</button>
    )
  }
})

module.exports = Button;
