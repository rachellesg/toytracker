

module.exports = (app, allModels, upload) => {
  var multer = require('multer');
  var upload = multer({dest: './public/uploads/'});
  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR TOY TRACKER CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */


  // require the controller
  const toytrackerControllerCallbacks = require('./controllers/toytracker')(allModels);

  app.get('/', toytrackerControllerCallbacks.homepage);
  // app.get('/error', toytrackerControllerCallbacks.error);
  
  app.delete('/collections/:id', toytrackerControllerCallbacks.deleteCollection);
  app.get('/collections', toytrackerControllerCallbacks.allCollectionPage);
  app.post('/collections/add', toytrackerControllerCallbacks.addCollection);
  app.get('/collections/:id', toytrackerControllerCallbacks.singleCollectionPage);

  app.delete('/items/:id', toytrackerControllerCallbacks.deleteItem);
  app.post('/items/add', upload.single('imageURL'), toytrackerControllerCallbacks.addItem);

  app.get('/signup', toytrackerControllerCallbacks.signUp);
  app.post('/signup', toytrackerControllerCallbacks.createUser);
  app.get('/login', toytrackerControllerCallbacks.logIn);
  app.post('/login', toytrackerControllerCallbacks.logInUser);
  app.get('/logout', toytrackerControllerCallbacks.logOutUser);

  app.get('/dashboard', toytrackerControllerCallbacks.dashboard);
  app.get('/users/:id', toytrackerControllerCallbacks.userPage);

  app.get('/*', toytrackerControllerCallbacks.homepage);


  //app.get('/pokemons/:id', pokemons.getPokemon);
};
