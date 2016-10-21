var React = require("react");
var ReactRouter = require("react-router");

var HelloMessage = React.createClass({
  render: function() {
    return (
      <div className="slider" >
         <ul className="slides">
           <li>
             <img src="/src/images/blog1.jpg"/>
             <div className="caption center-align">
               <h3>Welcome to Sparta Global Blogs</h3>
               <h5 className="light grey-text text-lighten-3">HubSpot for Academy Students to Post Blogs.</h5>
             </div>
           </li>
           <li>
             <img src="/src/images/blog2.jpg"/>
             <div className="caption center-align">
               <h3>Connect with Academy Students</h3>
               <h5 className="light grey-text text-lighten-3"> From the clever to the controversial, find ideas worth making time for.</h5>
             </div>
           </li>
           <li>
             <img src="/src/images/blog3.jpg"/>
             <div className="caption center-align">
               <h3>Sparta Global Blogs</h3>
               <h5 className="light grey-text text-lighten-3">Home to the world’s curious minds.</h5>
             </div>
           </li>
         </ul>
         <div id="button-home" className="slider-fixed-item center">
           <a id="register" className="btn waves-effect white grey-text darken-text-2" href="/#/register">Register</a>
           <a id="login" className="btn waves-effect white grey-text darken-text-2" href="/#/login">Login</a>
         </div>
       </div>
  )
  }
});

module.exports = HelloMessage;
