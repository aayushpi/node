var PagesController = {

  home:function(req,res){
    res.render('pages/home');
  },

  cat:function(req,res){
    res.send(200, 'meow')
  },

  dog:function(req,res){
    res.render('pages/dog');
  }
  
};

module.exports = PagesController;