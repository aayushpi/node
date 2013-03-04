var PagesController = require('../controllers/pagescontroller')
, AuthController = require('../controllers/authcontroller')
, passport = require("passport");


var verifyUser = function(req, res, next){//next is a callback. it's necessary
  if (req.session.passport.user) return next()
    res.redirect('/login');
};



var route=function(app){
  
  app.get('/login', AuthController.login);
  app.use(verifyUser);
  app.use('/', PagesController.home);

  app.use('/cat', PagesController.cat);
  app.use('/dog', PagesController.dog);

  // Redirect the user to Google for authentication.  When complete, Google
  // will redirect the user back to the application at
  //     /auth/google/return
  app.get('/auth/google', passport.authenticate('google'));

  // Google will redirect the user to this URL after authentication.  Finish
  // the process by verifying the assertion.  If valid, the user will be
  // logged in.  Otherwise, authentication has failed.
  app.get('/auth/google/return', 
    passport.authenticate('google', { successRedirect: '/',
                                      failureRedirect: '/login' }));

};

module.exports = route;
