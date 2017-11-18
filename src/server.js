import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';

var mysql = require('mysql');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var passport   = require('passport')

import ClientRoutes from './client-routes';

import apiRoutes from './api-routes';
import FestivalListPage from './react/templates/festival-list.js';
import FestivalGridContainer from './react/templates/festivalGrid-container';
import FestivalPage from './react/templates/festival-page';
import Navbar from './react/components/Navbar.js';
import ArticlesListPage from './react/templates/articles-list-page';
import ArticlePageBanner from './react/components/ArticlePageBanner';

import accessRights from './rbac';

const app = new express();

const session_options = {
    checkExpirationInterval: 1000 * 60 * 15, // 15mins
    expiration: 1000 * 60 * 60 * 24 * 7, // 1 week
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
};

const sql_config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'musefests',
    connectionLimit : 100
};

const pool = mysql.createPool(sql_config);

var sessionStore = new MySQLStore(session_options, pool);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(session({
    //key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());
//Models
var models = require("./models");




app.use('/api', apiRoutes);

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();
    res.redirect('/signin');
};


let navbar;
app.use( (req, res, next) => {
  let user = {};
  if(req.isAuthenticated())
  {
    user = req.user;
  }
  navbar = renderToString(
    <Navbar userInfo = {user}/>
  );
  next();
})


app.get('/', (req, res) => {
    fetch('http://test.musefests.com/api/fests')
      .then(resp => resp.json())
      .then(function (data) {
          const festGridContainer = renderToString(
            <FestivalGridContainer fests = {data} />
          );
          res.render('index', {title: 'Musefests', navbar, festGridContainer });

      })
      .catch(function(e) {
        console.log("err api fetching"+e);
      });
});

app.get('/festivals', isLoggedIn, (req, res) => {

  fetch('http://test.musefests.com/api/fests')
    .then(resp => resp.json())
    .then(function (data) {
      const listcontent = renderToString(
        <FestivalListPage initialFests = {data} />
      );
      res.render('festival-listing', {title: 'Musefests', navbar, listcontent });

    })
    .catch(function(e) {
      console.log("err api fetching"+e);
    });

})

app.get('/festival/:_id/:title', (req, res) => {
  let user = req.user;
  let fest_id = req.params._id;
  let fest_title = req.params.title
  fetch('http://test.musefests.com/api/festival/'+fest_id)
    .then(resp => resp.json())
    .then(function (data) {
      const fest_content = renderToString(
        <FestivalPage festContent = {data.festData} userInfo = {user} />
      );
      let performers = [];
      if(data.performers.length!=0)
      {
        performers = data.performers[0];
      }


      // const performers_content = renderToString(
      //   <Performers performersList = {data.performers[0]} />
      // );

      res.render('festival-page', {title: fest_title , navbar, fest_content, performers });

    })
    .catch(function(e) {
      console.log("err api fetching"+e);
    });
})

app.get('/add/festival', (req, res) => {
  fetch('http://test.musefests.com/api/artists/all')
  .then(resp => resp.json())
  .then( (data) => {
    let artists = data;
    res.render('add-festival', {title: "Add New Festival",navbar, artists})
  })
  .catch(function(e) {
    console.log("err api fetching"+e);
  });
});

app.get('/edit/festival/:fest_id/:user_id/:fest_title', isLoggedIn, (req, res) => {
  var userLoggedIn = req.user;
  var fest_id = req.params.fest_id;
  var user_id = req.params.user_id;
  if(accessRights.can(userLoggedIn.role,'edit') && userLoggedIn.id == user_id)
  {
    fetch('http://test.musefests.com/api/festival/'+fest_id)
      .then(resp => resp.json())
      .then(function (data){
        let festContent = data.festData;
        fetch('http://test.musefests.com/api/artists/all')
        .then(resp => resp.json())
        .then( (artist_data) => {
          let artists = artist_data;
          res.render('edit-festival',{title:"Edit Festival",navbar, festContent, artists, user_id})
        })
        .catch(function(e) {
          console.log("err api fetching"+e);
        });
      })
      .catch(function(e) {
        console.log("err api fetching"+e);
      });
  }
  else {
    res.status(401).json("Not Authorized!!");
  }
});

app.get('/articles', (req, res) => {
  fetch('http://test.musefests.com/api/articles')
    .then(resp => resp.json())
    .then(function (data) {
      const articlesListContent = renderToString(
        <ArticlesListPage articles = {data} />
      );
      res.render('article-listing', {title: 'Articles', navbar, articlesListContent });

    })
    .catch(function(e) {
      console.log("err api fetching"+e);
    });
});

app.get('/article/:_id/:title', isLoggedIn, (req, res) => {
  let blog_id = req.params._id;
  let blog_title = req.params.title;
  let userLoggedIn = req.user;
  fetch('http://test.musefests.com/api/articles/'+blog_id)
    .then(resp => resp.json())
    .then(function (data) {
      let blogContent = data[0];
      const articlesPageBanner = renderToString(
        <ArticlePageBanner blogDetails = {blogContent} userInfo = {userLoggedIn} />
      );
      res.render('article-page', {title: blog_title, navbar, blogContent, articlesPageBanner });

    })
    .catch(function(e) {
      console.log("err api fetching"+e);
    });
});

app.get('/add/article',isLoggedIn, (req, res) => {
  let userLoggedIn = req.user;
  res.render('add-article', {title: "Add New Article", navbar, user_id: userLoggedIn.id})
});

app.get('/edit/article/:blog_id/:user_id/:blog_title', isLoggedIn, (req, res) => {
  let blog_id = req.params.blog_id;
  let user_id = req.params.user_id;
  let blog_title = req.params.blog_title;
  let userLoggedIn = req.user;
  fetch('http://test.musefests.com/api/articles/'+blog_id)
    .then(resp => resp.json())
    .then(function (data) {
      let blogContent = data[0];
      let accessParams = {
        user:{},
        post:{}
      };
      accessParams.user.id=userLoggedIn.id;
      accessParams.post.owner = blogContent.writer_id;
      if(accessRights.can(userLoggedIn.role,'edit',accessParams) && userLoggedIn.id == user_id)
      {
        res.render('edit-article',{title:blog_title, navbar, blogContent, user_id});
      }
    })
    .catch(function(e) {
      console.log("err api fetching"+e);
    });
})

app.get('/signup', (req, res) => {
  res.render('signup',{title:'SignUp', navbar});
})

app.get('/signin', (req, res) => {
  res.render('signin',{title:'SignIn', navbar});
})

app.post('/api/signup', passport.authenticate('local-signup', {
       successRedirect: '/',
       failureRedirect: '/signup'
   }
));

app.post('/api/signin', passport.authenticate('local-signin', {
            successRedirect: '/festivals',
            failureRedirect: '/signin'
        }
    ));

app.get('/logout', (req, res) => {
  req.session.destroy(function(err) {
    console.log("session destroyed");
        res.redirect('/');
    });
})

require('./passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});



//console.log(initialData);

// app.get('*', (req, res) => {
//   let context = {};
//   const content = renderToString(
//     <StaticRouter location={req.url} context={context}>
//       <ClientRoutes/>
//     </StaticRouter>
//   );
//   res.render('index', {title: 'Musefests', content });
// });

app.listen(2525);
console.log("app running at test.musefests.com");
