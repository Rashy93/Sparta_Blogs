var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var axios = require('axios');
var Dispatcher = require('../dispatchers/appDispatcher.js');

var _posts = [{blogTitle:"Blog 1",
              blogPost:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget."
            },{
              blogTitle:"Blog 2",
               blogPost:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget."
             },
             {
                blogTitle:"Blog 3",
                blogPost:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget."
              },
              {
                blogTitle:"Blog 4",
                blogPost:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget."
               },
               {
                blogTitle:"Blog 5",
                blogPost:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget."
              }];


var BlogPost = merge(EventEmitter.prototype, {
  getPosts: function() {
    console.log("getting posts");
    return _posts;
  },
})

module.exports = BlogPost;

Dispatcher.register(handleAction);

function handleAction(payload) {
    _posts;
    BlogPost.emit("tong");
}
