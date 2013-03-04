var PageController = {

index: function(req, res) { // line 5 in route
    res.render('index', {title:"Express Rocks"});
  }

};

module.exports = PageController;