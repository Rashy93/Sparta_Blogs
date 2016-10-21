var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var User = require('./models/users');

var app = express();

// mongodb database - name: sparta_users
mongoose.connect('mongodb://localhost/sparta_users');

// middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

app.use('/', express.static(__dirname + '/public'));

app.get('/*', function(req, res) {
res.sendFile(__dirname + '/public/index.html');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
})


// Creates a user within the mongodb database through the schema
app.post('/register', function(req, res) {
  var newUser = new User({
        username : req.body.username,
        password : req.body.password
          });
// function - creates the user
      User.createUser(newUser,function(err,user){
        if(err) throw err;
        console.log(user);
      });
// sends a request status 200
      res.status(200).send('ok');
})

app.post('/login',function(req,res){
// Another function from the model 'users'
User.getUserByUsername(req.body.username, function(err, user){
         if(err) throw err;
         if(!user){
             return 'error';
         }else{
// comparing the password with the hash password (very encrypted)
      User.comparePassword(req.body.password, user.password, function(err, isMatch){
                if(err) throw err;
                 if(isMatch){
              res.status(200).send('LOGIN');
                       return true;
                    } else {
              res.status(404).send('NOTLOGIIN');
                       return false;
                   }
             });
        }
    })
});


app.listen(7070,function(){
  console.log('listing at port 7070');
})

module.exports = app;
