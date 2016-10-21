var React = require("react");
var ReactRouter = require("react-router");

var Footer = React.createClass({
  render: function() {
    return (
      <div>
      <footer className="page-footer" className="#455a64 blue-grey darken-2" >
        <div className="container">
    <div className="row">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.9523453471484!2d-0.3074402841080957!3d51.45903137962716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760c38826ab551%3A0xb80d9e654d582d40!2s1+Castle+Yard%2C+Richmond+TW10+6TF!5e0!3m2!1sen!2suk!4v1476986019229" width="400" height="200" frameBorder="0" allowFullScreen></iframe>

<div className="col l6 s12">
  <div className="white-text">
    <div>
      <div id="contact1">
        <h5>Contact Us</h5>
          <hr/>
            <h6>Address:</h6>
              <hr/>
                <ul>
                 <li>Sparta Global</li>
                  <li>Head Office</li>
                  <li>1 Castle Yard, Richmond</li>
                  <li>TW10 6TF</li>
                </ul>
              </div>
              <div id="contact2">
                <hr/>
                  <h6>Contact Details:</h6>
                    <hr/>
                  <ul>
                  <li>T: +44 (0) 208 939 1713</li>
                  <li>F: +44 (0) 208 711 6925</li>
                  <li>E: academy@spartaglobal.com</li>
                 </ul>
               </div>
              </div>
              <hr/>
               <div className="grey-text text-lighten-4">
                <p>© 2016 Copyright Text</p>
               </div>
             </div>

           </div>
         </div>
       </div>
       </footer>
     </div>

    )
  }
});

module.exports = Footer;
