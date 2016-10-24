var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var axios = require('axios');
var Dispatcher = require('../dispatchers/appDispatcher.js');

var _posts = [{blogTitle:"31 Steps To Become A Developer",
              blogPost:"An alternative way to learn coding. Before I learned how to code I used to ask developers I met how much time it took them to learn their craft — and how the managed to do it."
            },{
              blogTitle:"45 Github Issues Dos and Dont's",
               blogPost:"Many open source projects use Github Issues as the main medium of communication and tool for task management. Its openness and availability is one of…"
             },
             {
                blogTitle:"Following agile?",
                blogPost:"This is how you should create User Stories and give Story Points."
              },
              {
                blogTitle:"The Two Pillars of JavaScript",
                blogPost:"Part 1: How to Escape the 7th Circle of Hell..."
               },
               {
                blogTitle:"Cracking the UX Design Interview",
                blogPost:"8 types of UX design interviews you’ll encounter..."
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
