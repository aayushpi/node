var AuthController = {
  login: function(req, res) { //property(login:) : value(function)
    res.render('auth/login', {title:"Please login to Chat"});
  },
  logout: function(req, res){
    //destroy req.passport.user
    delete req.session.passport.user;
    res.redirect('/login');
  }
};

module.exports = AuthController;