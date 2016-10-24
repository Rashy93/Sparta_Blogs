var React = require("react");
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var browserHistory = require('react-router').browserHistory;
var AppStore = require('../stores/appStore');
var Dispatcher = require('../dispatchers/appDispatcher');

// get blog function
var BlogPost = React.createClass({
  getInitialState : function(){
    return {
      title: String,
      content: String,
      status: AppStore.getBlogPost(),
  }
},
// onchange as the field changes the information is being saved
getTitleData : function(e){
  this.setState({
    title : e.target.value
  });
  },
getContentData : function(e){
  this.setState({
    content : e.target.value
  });
},

// Gets the title and content and tells the AppStore to post blog
onClickBlogPost : function(e){
  console.log('click');
  Dispatcher.dispatch({
        data : {
          title : this.state.title,
          content : this.state.content
        },
        action : 'blogpost'
      })
      AppStore.on("blogpost", function() {
                this.setState({
                  status: true
                })
              }.bind(this))


          e.preventDefault();


},
  render: function() {
    return (
<div>
  <h4>Post a Blog:</h4>
    <div className="card-panel hoverable">
      <div className="container">
        <div className="col m9">
          <form>
            Title:<br/>
          <input type="text" name="title"/>
                <br/>
                  Content:<br/>
                <textarea type="text" name="content"></textarea>
              <br/><br/>
          </form>
        </div>
      </div>
    </div>
</div>

    )
  }
});
module.exports = BlogPost;
