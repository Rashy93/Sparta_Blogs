var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogpost = new Schema({
    title:  String,
    content: String
  }
);

var Blog = module.exports = mongoose.model('blogpost', blogpost);


module.exports.createBlogPost = function(newBlog, callback){
            newBlog.save(callback);
        });
    });
};

module.exports.getBlogByTitle = function(title, callback){
    var query = {title: title};
    Blog.findOne(query, callback);
};
module.exports.getBlogByContent = function(content, callback){
    var query = {content: content};
    Blog.findOne(query, callback);
};
