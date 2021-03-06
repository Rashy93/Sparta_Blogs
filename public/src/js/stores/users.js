var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var axios = require('axios');
var Dispatcher = require('../dispatchers/appDispatcher.js');

var _users = [{userName:"@Rashid",
              userImage:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkSAAAAJDU0ZjcwZWM3LTFmMmItNGI4OC04MWZiLWQyMzQyZjk1YWJmOA.jpg",
              userLink: "https://github.com/Rashy93"
            },
            {
              userName:"@Yussef",
               userImage:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAllAAAAJDY0YTMzNWM0LTE2M2ItNGQ2Mi1iOGYyLTRjNDU1MTRiNmM0Yg.jpg",
               userLink: "https://github.com/Rashy93"

             },
             {
                userName:"@Pratik",
                userImage:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAhJAAAAJGIxNDhmNDJmLWRiNzctNDdmZS05MTUyLWIwNTQ1ZmU1ZjI0Zg.jpg",
                userLink: "https://github.com/Rashy93"

              },
              {
                userName:"@Sumy",
                userImage:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAj0AAAAJDhjNTgyYWU5LTE4Y2MtNDI1MC1hNWNjLTRkZjU2YjUzMWZlYQ.jpg",
                userLink: "https://github.com/Rashy93"

               },
               {
                userName:"@WinWin",
                userImage:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAjCAAAAJGIwYjlmNTRiLWE0ZDUtNGEzMy1hY2U5LTk1NzgyZmI3OTQ3OA.jpg",
                userLink: "https://github.com/Rashy93"
              },
              {
               userName:"@SanjeevSan",
               userImage:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAdrAAAAJGZmYzM3YTM0LTMyMzYtNGQxNS05NTc4LWI3NGJhZWI2OTVlMg.jpg",
               userLink: "https://github.com/Rashy93"
             },
             {
              userName:"@Dorian",
              userImage:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAe1AAAAJGI0ZjAyOTI2LThjMWQtNGFkMi1iNzcyLTMyYTZjYzIyMTBjMg.jpg",
              userLink: "https://github.com/Rashy93"

            },
            {
            userName:"@MoMo",
            userImage:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAeiAAAAJDk2NTQ3ZjMzLWNhNDgtNGVmYS04NDk4LWYxMzEwZmZhNjEwNQ.jpg",
            userLink: "https://github.com/Rashy93"

          },
          {
          userName:"@Tasauce",
          userImage:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAlBAAAAJGE0OGU1MTg4LTM2NTktNDZiZC1iMTFiLTdmZDhhYTc2YjhiMg.jpg",
          userLink: "https://github.com/Rashy93"

        },
        {
        userName:"@JayJay",
        userImage:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgfAAAAJGY3Mzk2MWQzLTNkOTctNGU5Ny1iMDkyLTk3MDI1MDc4NWNjZA.jpg",
        userLink: "https://github.com/Rashy93"

      },
      {
      userName:"@NarBoo",
      userImage: "/src/images/narbuimg.png",
      userLink: "https://github.com/Rashy93"

    },
    {
    userName:"@Ollie",
    userImage:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAARvAAAAJGIwMWNiYjk4LTAyODktNDBkNi05MWUwLWY5MWZlMWQ5YTZmNA.jpg",
    userLink: "https://github.com/Rashy93"

  }];
var BlogUser = merge(EventEmitter.prototype, {
  getUsers: function() {
    console.log("getting users");
    return _users;
  },
})

module.exports = BlogUser;

Dispatcher.register(handleClick);

function handleClick(payload) {
    _users;
    BlogUser.emit("tang");
}
