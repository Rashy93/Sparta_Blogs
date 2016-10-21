var React = require("react");
var AppDispatcher = require("../dispatchers/appDispatcher");
var Post = require("./posts.jsx");
var BlogPost = require("../stores/posts.js");


var PostList = React.createClass({
  getInitialState: function() {

    return {
      posts: BlogPost.getPosts()
    }
  },

componentDidMount: function() {
  BlogPost.on("tong", function() {
    console.log("tong")
    this.setState({
    posts: BlogPost.getPosts()
    })
  }.bind(this))
},

  render: function() {
    return (
      <div className="content">
          <div className="col m4">
            <h4>Post List:</h4>

            {
              this.state.posts.map(function(post, i){
                return (
                  <Post key={i} post={post}/>
                )
              })
            }
          </div>
      </div>
    )
  }
});
module.exports = PostList;
