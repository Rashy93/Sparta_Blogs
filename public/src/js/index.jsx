var React = require("react");
var ReactDOM = require("react-dom");
var HelloMessage = require("./components/home.jsx");
var Header = require("./components/header.jsx");
var UserList = require("./components/userlist.jsx");
var Main = require("./components/main.jsx");
var PostList = require("./components/postlist.jsx");
var Footer = require("./components/footer.jsx");
var Button = require("./components/example.jsx");
var Register = require("./components/register.jsx");
var Login = require("./components/login.jsx");

//setting up react routes
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var browserHistory = require('react-router').browserHistory;
var hashHistory = require('react-router').hashHistory;


require('../css/style.css');

var Body = React.createClass({
  render: function(){
    return (
        <Router history={hashHistory}>
          <Route path="/" component={Main}>
            <Route path="register" component={Register}/>
              <Route path="login" component={Login}/>
            <Route path="posts" component={PostList}/>
            <Route path="users" component={UserList}/>
          </Route>
        </Router>
    )
  }
});

ReactDOM.render(<Body />, document.getElementById('app'));
