var React = require("react");
var ReactRouter = require("react-router");

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <div>
        <nav className="#455a64 blue-grey darken-2" role="navigation">
              <ul className="nav navbar-nav">
              <li className="active"><a href="/">Home</a></li>
              <li><a href="/#/posts">Posts</a></li>
              <li><a href="/#/users">Users</a></li>
              <li><a href="/#/logout">Logout</a></li>
                <img id="logo" className="brand-logo center" src="http://spartaglobal.com/wp-content/themes/sparta/img/logo.png"/>
              </ul>
              <div className="input-field right">
                    <input id="search" type="search" required/>
                    <label htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                  </div>
        </nav>
        </div>

    </div>
  )
  }
});

module.exports = Header;
