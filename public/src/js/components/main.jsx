var React = require("react");
var AppDispatcher = require("../dispatchers/appDispatcher");
var Header = require("./header.jsx");
var Home = require("./home.jsx");
var Footer = require("./footer.jsx");

var Body = React.createClass({
  render: function(){
    return (
      <div>
        <Header/>
        <main>
          {(this.props.location.pathname === "/") ? (<Home/>): this.props.children }
        </main>
        <Footer/>
      </div>

    )
  }
});

module.exports = Body;
