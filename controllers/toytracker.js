const sha256 = require("js-sha256");
const SALT = 'realisationpar';

var cloudinary = require('cloudinary');

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

     let error = (response) => {
       response.render('error');
     }

    let homepage = (request, response) => {
        db.toytracker.homepage((error, results) => {
          let data = {
            page: "Homepage",
            collection: results,
            hashedLogin: request.cookies.hashedlogin
          }
          response.render("index", data);
          console.log("++++ CONTROLLER results for collections", results)
        });
        // cannot pass string as data
        // whenever using props has to be an object
    };

    let allCollectionPage = (request, response) => {
      db.toytracker.allCollections((error, results) => {
        // console.log("COLLECTION XXX", results)
        let data = {
          page: "All Collections",
          collection: results,
          hashedLogin: request.cookies.hashedlogin
        }
        console.log("ALLLL COOLLLEECTCTTTIONS ", data);
        response.render('collections', data)
      })
    };

    let singleCollectionPage = (request, response) => {
      let collectionId = request.params.id;
      let userId = request.cookies.id;
      db.toytracker.collections(collectionId, (error, results) => {
        // console.log("COLLECTION XXX", results)
        let data = {
          page: "Collections",
          collection: results
        }
        db.toytracker.itemCollections(collectionId, (error, results1) => {
        db.toytracker.collectionCheck(userId, collectionId, (error, likeResults) => {
          let checkIfLike = {
            likeResults: likeResults
          }
        db.toytracker.addItemSelections((error, results2) => {
          db.toytracker.addItemSelections2((error, results3) => {
            let collectionData = {
              items: results1,
              brandData: results2,
              companyData: results3,
              collection: data.collection,
              hashedLogin: request.cookies.hashedlogin,
              username: request.cookies.username,
              userId: request.cookies.id,
              likeState: checkIfLike.likeResults
            }
            console.log("ADD ITEM FORM RESULTSSSSSS", collectionData);
            response.render('single', collectionData);
            // if (results === "404") {
            //   response.redirect('/');
            // } else {
            // }
          })
          })
        })
        })
      })
    };

    let addCollection = (request, response) => {
      let collectionName = request.body.name;
      let collectionUser = request.body.userid;
      console.log(collectionName, collectionUser);
      db.toytracker.addCollection(collectionName, collectionUser, (error, results) => {
        console.log("yow, doned adding collection");
        response.redirect('back');
      });
    };

    let deleteCollection = (request, response) => {
      let collectionId = request.params.id;
      console.log(collectionId);
      db.toytracker.deleteCollection(collectionId, (error, results) => {
        db.toytracker.deleteItemsFromCollection(collectionId, (error, results2) =>{
          let receiveData = {
            userId: request.cookies.id
          }
          console.log("COOKIES +++++++ ****", request.cookies.id);
          db.toytracker.dashboard(receiveData, (error, results) => {
            let data = {
              userdetails: results
            }
            db.toytracker.dashboardCollection(data, (error, results2) => {
              let collectionData = {
                page: "Dashboard",
                userdetails: data.userdetails,
                collection: results2,
                errorMessage: results2.errorMessage,
                hashedLogin: request.cookies.hashedlogin
              }
              console.log("DASHBOARD COLLECTION **********", collectionData);
              response.render('dashboard', collectionData);
            });
          })
        })
      });
    }

    let signUp = (request, response) => {
      const data = {
        hashedLogin: request.cookies.hashedlogin
      }
      console.log("SIGN UP HASHED++++++++", data);
      response.render("user/signup", data);
    };

    let logIn = (request, response) => {
      console.log("PRINT")
      response.render("user/login");
    };

    let createUser = (request, response) => {
      let userName = request.body.username;
      let userPassword = sha256(request.body.password + SALT);
      let userEmail = request.body.email;
      db.toytracker.createUser(userName, userPassword, userEmail, (error, results) => {
        const userId = results.id;
        const userName = results.name;
        const hashedLogin = sha256(SALT + results.id);
        console.log("yey user created here ----", results);
        response.cookie('id', userId);
        response.cookie('username', userName)
        response.cookie('hashedlogin', hashedLogin);
        response.redirect('/users/'+userId);
      });
    }

    let logInUser = (request, response) => {
      let receiveData = {
        userPassword: sha256(request.body.password + SALT),
        userEmail: request.body.email
      }
      console.log("++ CONTROLLER ++", receiveData);
      db.toytracker.logInUser(receiveData, (error, results) => {
        const userId = results.id;
        const userName = results.name;
        const hashedLogin = sha256(SALT + results.id);
        console.log("USER LOGGED IN XX", userId, userName, hashedLogin);
        response.cookie('id', userId);
        response.cookie('username', userName)
        response.cookie('hashedlogin', hashedLogin);
        response.redirect('/');
      })
    }

    let logOutUser = (request, response) => {
      response.clearCookie('id');
      response.clearCookie('username');
      response.clearCookie('hashedlogin');
      response.redirect("/");
    };

    let dashboard = (request, response) => {
      let receiveData = {
        userId: request.cookies.id
      }
      console.log("COOKIES +++++++ ****", request.cookies.id);
      db.toytracker.dashboard(receiveData, (error, results) => {
        let data = {
          userdetails: results
        }
        db.toytracker.dashboardCollection(data, (error, results2) => {
          let collectionData = {
            page: "Dashboard",
            userdetails: data.userdetails,
            collection: results2,
            errorMessage: results2.errorMessage,
            hashedLogin: request.cookies.hashedlogin
          }
          console.log("DASHBOARD COLLECTION **********", collectionData);
          response.render('dashboard', collectionData);
        });
      })
    };

    let userPage = (request, response) => {
      let receiveData = {
        userId: request.params.id
      }
      db.toytracker.userPage(receiveData, (error, results) => {
        let data = {
          page: "Profile of " + results.name,
          userdetails: results,
          hashedLogin: request.cookies.hashedlogin
        }
        console.log("USERPAGE3333", data)
        if (results === "404") {
          response.redirect('/');
        } else {
          db.toytracker.dashboardCollection(data, (error, results2) => {
            let collectionData = {
              userdetails: data.userdetails,
              collection: results2,
              errorMessage: results2.errorMessage,
              hashedLogin: request.cookies.hashedlogin
            }
            console.log("DASHBOARD COLLECTION **********", collectionData);
            response.render('profile', collectionData)
            // response.send(data);
          });
        }
      })
    };

    let addItem = (request, response) => {
      let data = {
        name: request.body.name, // string
        year:  request.body.year,  // integer
        collection:  request.body.collectionId, // ref FK id 
        company:  request.body.company, // ref FK id
        brand:  request.body.brand, // ref FK Id
        condition:  request.body.condition, // string
        price:  request.body.price, // integer
        user_id:  request.body.collectionUserId // ref FK id,
      }
      console.log(data);
      cloudinary.uploader.upload(request.file.path, function(result) {
        console.log(result.secure_url);
        data.image_url = result.secure_url;
        console.log(data);
        db.toytracker.addItem(data, (error, results) => {
          console.log("ADD ITEM FORM RESULTSSSSSS", results);
          response.redirect('back');
        })
      });
    };

    let deleteItem = (request, response) => {
      itemId = request.body.id;
      console.log(itemId);
      db.toytracker.deleteItem(itemId, (error, results) => {
        console.log("++++ DELETE ITEM ++++", results);
        response.redirect('back');
      })
    }

    let likeCollection = (request, response) => {
      userId = request.cookies.id;
      collectionId = request.params.id;
      console.log(userId, collectionId);
      db.toytracker.collectionLike(userId, collectionId, (error, results) => {
        let collectionData = {
          userId: userId,
          likes: results
        }; 
        response.redirect('back');
        console.log(collectionData);
      })
    };

    let checkLike = (request, response) => {
      userId = request.cookies.id;
      console.log(userId, collectionId);
    }

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        error, homepage, 
        singleCollectionPage, addCollection, allCollectionPage, deleteCollection,
        userPage, dashboard,
        signUp, logIn, createUser, logInUser, logOutUser,
        addItem, deleteItem, likeCollection
    };

}