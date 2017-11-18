'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _reactRouterConfig = require('react-router-config');

var _clientRoutes = require('./client-routes');

var _clientRoutes2 = _interopRequireDefault(_clientRoutes);

var _apiRoutes = require('./api-routes');

var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

var _festivalList = require('./react/templates/festival-list.js');

var _festivalList2 = _interopRequireDefault(_festivalList);

var _festivalGridContainer = require('./react/templates/festivalGrid-container');

var _festivalGridContainer2 = _interopRequireDefault(_festivalGridContainer);

var _festivalPage = require('./react/templates/festival-page');

var _festivalPage2 = _interopRequireDefault(_festivalPage);

var _Navbar = require('./react/components/Navbar.js');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _articlesListPage = require('./react/templates/articles-list-page');

var _articlesListPage2 = _interopRequireDefault(_articlesListPage);

var _ArticlePageBanner = require('./react/components/ArticlePageBanner');

var _ArticlePageBanner2 = _interopRequireDefault(_ArticlePageBanner);

var _rbac = require('./rbac');

var _rbac2 = _interopRequireDefault(_rbac);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mysql = require('mysql');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var passport = require('passport');

var app = new _express2.default();

var session_options = {
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

var sql_config = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'musejam',
  database: 'musefests',
  connectionLimit: 100
};

var pool = mysql.createPool(sql_config);

var sessionStore = new MySQLStore(session_options, pool);

app.set('view engine', 'ejs');
app.set('views', _path2.default.join(__dirname, 'views'));

app.use(_express2.default.static(_path2.default.join(__dirname, 'static')));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

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

app.use('/api', _apiRoutes2.default);

function isLoggedIn(req, res, next) {

  if (req.isAuthenticated()) return next();
  res.redirect('/signin');
};

var navbar = void 0;
app.use(function (req, res, next) {
  var user = {};
  if (req.isAuthenticated()) {
    user = req.user;
  }
  navbar = (0, _server.renderToString)(_react2.default.createElement(_Navbar2.default, { userInfo: user }));
  next();
});

app.get('/', function (req, res) {
  fetch('http://test.musefests.com/api/fests').then(function (resp) {
    return resp.json();
  }).then(function (data) {
    var festGridContainer = (0, _server.renderToString)(_react2.default.createElement(_festivalGridContainer2.default, { fests: data }));
    res.render('index', { title: 'Musefests', navbar: navbar, festGridContainer: festGridContainer });
  }).catch(function (e) {
    console.log("err api fetching" + e);
  });
});

app.get('/festivals', isLoggedIn, function (req, res) {

  fetch('http://test.musefests.com/api/fests').then(function (resp) {
    return resp.json();
  }).then(function (data) {
    var listcontent = (0, _server.renderToString)(_react2.default.createElement(_festivalList2.default, { initialFests: data }));
    res.render('festival-listing', { title: 'Musefests', navbar: navbar, listcontent: listcontent });
  }).catch(function (e) {
    console.log("err api fetching" + e);
  });
});

app.get('/festival/:_id/:title', function (req, res) {
  var user = req.user;
  var fest_id = req.params._id;
  var fest_title = req.params.title;
  fetch('http://test.musefests.com/api/festival/' + fest_id).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    var fest_content = (0, _server.renderToString)(_react2.default.createElement(_festivalPage2.default, { festContent: data.festData, userInfo: user }));
    var performers = [];
    if (data.performers.length != 0) {
      performers = data.performers[0];
    }

    // const performers_content = renderToString(
    //   <Performers performersList = {data.performers[0]} />
    // );

    res.render('festival-page', { title: fest_title, navbar: navbar, fest_content: fest_content, performers: performers });
  }).catch(function (e) {
    console.log("err api fetching" + e);
  });
});

app.get('/add/festival', function (req, res) {
  fetch('http://test.musefests.com/api/artists/all').then(function (resp) {
    return resp.json();
  }).then(function (data) {
    var artists = data;
    res.render('add-festival', { title: "Add New Festival", navbar: navbar, artists: artists });
  }).catch(function (e) {
    console.log("err api fetching" + e);
  });
});

app.get('/edit/festival/:fest_id/:user_id/:fest_title', isLoggedIn, function (req, res) {
  var userLoggedIn = req.user;
  var fest_id = req.params.fest_id;
  var user_id = req.params.user_id;
  if (_rbac2.default.can(userLoggedIn.role, 'edit') && userLoggedIn.id == user_id) {
    fetch('http://test.musefests.com/api/festival/' + fest_id).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      var festContent = data.festData;
      fetch('http://test.musefests.com/api/artists/all').then(function (resp) {
        return resp.json();
      }).then(function (artist_data) {
        var artists = artist_data;
        res.render('edit-festival', { title: "Edit Festival", navbar: navbar, festContent: festContent, artists: artists, user_id: user_id });
      }).catch(function (e) {
        console.log("err api fetching" + e);
      });
    }).catch(function (e) {
      console.log("err api fetching" + e);
    });
  } else {
    res.status(401).json("Not Authorized!!");
  }
});

app.get('/articles', function (req, res) {
  fetch('http://test.musefests.com/api/articles').then(function (resp) {
    return resp.json();
  }).then(function (data) {
    var articlesListContent = (0, _server.renderToString)(_react2.default.createElement(_articlesListPage2.default, { articles: data }));
    res.render('article-listing', { title: 'Articles', navbar: navbar, articlesListContent: articlesListContent });
  }).catch(function (e) {
    console.log("err api fetching" + e);
  });
});

app.get('/article/:_id/:title', isLoggedIn, function (req, res) {
  var blog_id = req.params._id;
  var blog_title = req.params.title;
  var userLoggedIn = req.user;
  fetch('http://test.musefests.com/api/articles/' + blog_id).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    var blogContent = data[0];
    var articlesPageBanner = (0, _server.renderToString)(_react2.default.createElement(_ArticlePageBanner2.default, { blogDetails: blogContent, userInfo: userLoggedIn }));
    res.render('article-page', { title: blog_title, navbar: navbar, blogContent: blogContent, articlesPageBanner: articlesPageBanner });
  }).catch(function (e) {
    console.log("err api fetching" + e);
  });
});

app.get('/add/article', isLoggedIn, function (req, res) {
  var userLoggedIn = req.user;
  res.render('add-article', { title: "Add New Article", navbar: navbar, user_id: userLoggedIn.id });
});

app.get('/edit/article/:blog_id/:user_id/:blog_title', isLoggedIn, function (req, res) {
  var blog_id = req.params.blog_id;
  var user_id = req.params.user_id;
  var blog_title = req.params.blog_title;
  var userLoggedIn = req.user;
  fetch('http://test.musefests.com/api/articles/' + blog_id).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    var blogContent = data[0];
    var accessParams = {
      user: {},
      post: {}
    };
    accessParams.user.id = userLoggedIn.id;
    accessParams.post.owner = blogContent.writer_id;
    if (_rbac2.default.can(userLoggedIn.role, 'edit', accessParams) && userLoggedIn.id == user_id) {
      res.render('edit-article', { title: blog_title, navbar: navbar, blogContent: blogContent, user_id: user_id });
    }
  }).catch(function (e) {
    console.log("err api fetching" + e);
  });
});

app.get('/signup', function (req, res) {
  res.render('signup', { title: 'SignUp', navbar: navbar });
});

app.get('/signin', function (req, res) {
  res.render('signin', { title: 'SignIn', navbar: navbar });
});

app.post('/api/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/signup'
}));

app.post('/api/signin', passport.authenticate('local-signin', {
  successRedirect: '/festivals',
  failureRedirect: '/signin'
}));

app.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    console.log("session destroyed");
    res.redirect('/');
  });
});

require('./passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function () {
  console.log('Nice! Database looks fine');
}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!");
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
//# sourceMappingURL=server.js.map