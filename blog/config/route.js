var PageController = require('../controller/pagecontroller'),

PostsController = require('../controller/postscontroller'),

route = function (app) { //pass app argument, now route has access to app.js

  app.get('/', PageController.index);  //line 3 in pagecontroller

  app.get('/posts', PostsController.index);
  app.get('/posts/:id', PostsController.detail);
  app.post('/posts', PostsController.create);
  app.put('/posts/:id', PostsController.edit);
  app.del('posts/:id', PostsController.destroy);
};

module.exports = route;  //export