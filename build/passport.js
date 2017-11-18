'use strict';

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (passport, user) {
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, done) {
        var generateHash = function generateHash(password) {
            return _bcryptNodejs2.default.hashSync(password, _bcryptNodejs2.default.genSaltSync(8), null);
        };
        User.findOne({
            where: {
                email: email
            }
        }).then(function (user) {
            if (user) {
                return done(null, false, {
                    message: 'That email is already taken'
                });
            } else {
                var userPassword = generateHash(password);
                var data = {
                    email: email,
                    password: userPassword,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    role: 'user'
                };
                User.create(data).then(function (newUser, created) {
                    if (!newUser) {
                        return done(null, false);
                    }
                    if (newUser) {
                        return done(null, newUser);
                    }
                });
            }
        });
    }));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, done) {
        var User = user;
        var isValidPassword = function isValidPassword(userpass, password) {
            return _bcryptNodejs2.default.compareSync(password, userpass);
        };

        User.findOne({
            where: {
                email: email
            }
        }).then(function (user) {
            if (!user) {
                console.log("user not found");
                return done(null, false, {
                    message: 'Email does not exist'
                });
            }
            if (!isValidPassword(user.password, password)) {
                console.log("pass wrong");
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            console.log("hiii");
            var userinfo = user.get();
            return done(null, userinfo);
        }).catch(function (err) {
            console.log("Error:", err);
            return done(null, false, {
                message: 'Something went wrong with your Signin'
            });
        });
    }));

    //serialize
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    // deserialize user
    passport.deserializeUser(function (id, done) {
        User.findById(id).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });
};
//# sourceMappingURL=passport.js.map