var React = require("react");

var User = React.createClass({
  render: function() {
    return (
      <div className="card col s3">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.props.user.userImage}/>

          </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{this.props.user.userName}<i className="material-icons right">more_vert</i></span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget.</p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">{this.props.user.userName}<i className="material-icons right">close</i></span>
              <p>{this.props.user.userLink}</p>
            </div>
          </div>

    )
  }
})

module.exports = User;
