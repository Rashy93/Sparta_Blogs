var React = require("react");


var Post = React.createClass({
  render: function() {
    return (
      <div id="post" className="col m4">
           <div  className="col s12 m6">
             <div className="card blue-grey darken-1">
               <div className="card-content white-text">
                 <span className="card-title">{this.props.post.blogTitle}</span>
                 <p>{this.props.post.blogPost}</p>
               </div>
               <div className="card-action">
                 <a href="#">View</a>
                 <a href="#">Comment</a>
               </div>
             </div>
           </div>
         </div>
    )
  }
})

module.exports = Post;
