var posts = [

  {
    id:1,
    title:"Node Node Node",
    body: "bikes bikes bikes bikes"
  },

  {
    id:2,
    title: "node2 node2",
    body: "nom nom nom"
  }
];

var PostsController = {

  index: function(req, res) {
    res.render('posts/index', {posts:JSON.stringify(posts)});
  },
  detail: function (req, res) {},
  create: function (req, res) {},
  edit: function (req, res) {},
  destroy: function (req, res) {}

};




module.exports = PostsController;  //lets code get at it