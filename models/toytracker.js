const sha256 = require("js-sha256");
const SALT = 'realisationpar';
const moment = require('moment');

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

module.exports = (dbPoolInstance) => {

  let homepage = (callback) => {
    let query = "SELECT collections.id as id, collections.name as name, collections.user_id as user_id, collections.created as created, users.name as username, users.id as user_id FROM users INNER JOIN collections ON (collections.user_id = users.id) ORDER BY created DESC LIMIT 4;"; 
    dbPoolInstance.query(query, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        console.log("++++++++");
        console.log("HOME PAGE", result.rows);
        console.log("++++++++");
        callback(error, result.rows)
      }
    });
  }

  let allCollections = (callback) => {
    let query = "SELECT collections.id as id, collections.name as name, collections.user_id as user_id, collections.created as created, users.name as username FROM collections INNER JOIN users ON (collections.user_id = users.id)";
    dbPoolInstance.query(query, (error, result) => {
      if (error) {
        callback(error, null);
        console.log(error);
      } else {
        console.log("++++++++");
        console.log("GET /ALL/ COLLECTIONS", result.rows);
        console.log("++++++++");
        callback(error, result.rows)
      }
    })
  }

    // single collection
  let collections = (collectionId, callback) => {
    let query = "SELECT collections.id as id, collections.name as name, collections.user_id as user_id, collections.created as created, users.name as username FROM collections INNER JOIN users ON (collections.user_id = users.id) WHERE collections.id=$1";
    let values = [collectionId];
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        callback(error, null);
        console.log(error);
      } else {
        if (result.rows[0] === undefined) {
          console.log("collection doesn't exist");
          result = "404";
          callback(error, result);
        } else {
          console.log("++++++++");
          console.log("GET /:ID/ COLLECTIONS", result.rows[0]);
          console.log("++++++++");
          callback(error, result.rows[0])
        }
      }
    })
  }

  let addCollection = (collectionName, collectionUser, callback) => {
    let query = "INSERT INTO collections (name,user_id,created) VALUES ($1,$2,$3) RETURNING *";
    let date = new Date();
    let values = [collectionName, collectionUser, date];
    console.log("ODOADDSDDOOOOOOO", date);
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        callback(error, null);
        console.log(error);
      } else {
        console.log("++++++++");
        console.log("// CREATE COLLECTION ", result.rows[0]);
        console.log("++++++++");
        callback(error, result.rows[0])
      }
    });
  }

  let deleteCollection = (collectionId, callback) => {
    let query = "DELETE FROM collections WHERE id=$1";
    // DELETE ALL FK REFERENCES for items in THIS collection T_T
    let values = [collectionId];
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        callback(error, null);
        console.log(error);
      } else {
        console.log("++++++++");
        console.log("// DELETE COLLECTION ", result.rows);
        console.log("++++++++");
        callback(error, result.rows[0])
      }
    });
  }

  // delete all items from collection
  let deleteItemsFromCollection = (collectionId, callback) => {
    let query = "DELETE FROM items WHERE collection=$1";
    let values = [collectionId];
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        callback(error, null);
        console.log(error);
      } else {
        console.log("++++++++");
        console.log("// DELETE ITEMS FROM COLLECTION "), result.rows;
        console.log("++++++++");
        callback(error, result.rows)
      }
    });
  }

  // delete individual items from collection
  let deleteItem = (itemId, callback) => {
    let query = "DELETE FROM items WHERE id=$1";
    let values = [itemId];
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        callback(error, null);
        console.log(error);
      } else {
        console.log("++++++++");
        console.log("// DELETE ITEM"), result.rows[0];
        console.log("++++++++");
        callback(error, result.rows[0])
      }
    });
  }

  let createUser = (userName, userPassword, userEmail, callback) => {
    let query = "INSERT INTO users (name, password, email) VALUES ($1, $2, $3) RETURNING *"
    let values = [userName, userPassword, userEmail];
    console.log(values);
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        callback(error, null);
        console.log(error);
      } else {
        console.log("++++++++");
        console.log("// CREATE USER ", result.rows[0]);
        console.log("++++++++");
        callback(error, result.rows[0])
      }
    });
  }

  let logInUser = (receiveData, callback) => {
    let query = "SELECT * FROM users WHERE email='"+receiveData.userEmail+"'";
    console.log("+++++++ mdoels ... ",query);
    dbPoolInstance.query(query, (error, result) => {
      if (error) {
        callback(error, null);
        console.log(error);
      } else {
        console.log("UMMMMM OK --- entered password: ", receiveData.userPassword);
        console.log("HELLO +++ received::: ", result.rows);
        // callback(error, result.rows[0]);
        if (result.rows[0] === undefined) {
          // callback("User Doesn't Exist");
          result = "403";
          callback(error, result);
        } else {
          if (result.rows[0].password === receiveData.userPassword) {
            console.log("++++++++");
            console.log("// LOG IN USER ", result.rows[0]);
            console.log("++++++++");
            callback(error, result.rows[0]);
          } else {
            callback("Wrong password!");
          }
        }
      }
    })
  }

  let dashboard = (receiveData, callback) => {
    let query = 'SELECT * FROM users WHERE id=$1';
    let values = [receiveData.userId];
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        callback(error, null);
        console.log(error);
      } else {
        console.log("++++++++");
        console.log("// USER +ID+ PUBLIC PROFILE PAGE ", result.rows[0]);
        console.log("++++++++");
        callback(error, result.rows[0])
      }
    });
  };

  let dashboardCollection = (data, callback) => {
    let query = 'SELECT collections.id as id, collections.name as name, collections.user_id as user_id, collections.created as created, users.name as username FROM collections INNER JOIN users ON (collections.user_id = users.id) WHERE user_id=$1';
    let values = [data.userdetails.id];
    console.log("DASHBOARD COLLECTION VALUES:::::",values);
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        callback(error, null);
        console.log(error);
      } else {
        if (result.rows[0] === undefined) {
          console.log("Collection Doesn't Exist xx");
          // result = "No collections yet x";
          result = {
            errorMessage: "No collections yet x",
            collection: false
          }
          callback(error, result);
        } else {
          console.log("++++++++");
          console.log("// USER +ID+ COLLECTION RESULTZZXXX ", result.rows);
          console.log("++++++++");
          callback(error, result.rows)
        }
      }
    });
  };

  let userPage = (receiveData, callback) => {
    let query = 'SELECT * FROM users WHERE id=$1';
    // SELECT collections.id as id, collections.name as name, collections.user_id as user_id, collections.created as created, users.name as username FROM collections INNER JOIN users ON (collections.user_id = users.id) WHERE collections.id=$1
    let values = [receiveData.userId];
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        callback(error, null);
        console.log(error);
      } else {
        if (result.rows[0] === undefined) {
          console.log("user don't exist");
          result = "404";
          callback(error, result);
        } else {
          console.log("++++++++");
          console.log("// USER +ID+ PUBLIC PROFILE PAGE ", result.rows[0]);
          console.log("++++++++");
          callback(error, result.rows[0])
        }
      }
    });
  };

  let addItemSelections = (callback) => {
    // let query = 'SELECT brands.name as brand_name, brands.id as brand_id, companies.name as company_name, companies.id as company_id FROM brands, companies;';
    let query = 'SELECT brands.name as brand_name, brands.id as brand_id FROM brands;'
    dbPoolInstance.query(query, (error, result) => {
      if (error) {
        callback(error, result)
      } else {
        callback(error, result.rows)
      }
    })
  };

  let addItemSelections2 = (callback) => {
    let query = 'SELECT companies.name as company_name, companies.id as company_id FROM companies;';
    dbPoolInstance.query(query, (error, result) => {
      if (error) {
        callback(error, result)
      } else {
        callback(error, result.rows)
      }
    })
  };

  let addItem = (data, callback) => {
    let query = "INSERT INTO items (name, year, collection, company, brand, condition, price, user_id, image_url) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *";
    let values = [data.name, data.year, data.collection, data.company, data.brand, data.condition, data.price, data.user_id,data.image_url];
    console.log("ODOADDSDDOOOOOOO", values);
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        callback(error, null);
        console.log(error);
      } else {
        console.log("++++++++");
        console.log("// ADD ITEM TO COLZX ", result.rows[0]);
        console.log("++++++++");
        callback(error, result.rows[0])
      }
    });
  };

  // items in a collection
  let itemCollections = (collectionId, callback) => {
    let query = "SELECT brands.name as brand, brands.id as brand_id, companies.id as company_id, companies.name as company, items.condition, items.id as item_id, items.image_url, items.created, items.name, items.year as year, items.price as price, items.collection, collections.id, items.user_id as user_id FROM collections INNER JOIN items ON (collections.id = items.collection) INNER JOIN brands ON (brands.id = items.brand) INNER JOIN companies ON (companies.id = items.company) INNER JOIN users ON (users.id = items.user_id) WHERE collections.id=$1";
    let values = [collectionId];
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        callback(error, null);
        console.log(error);
      } else {
        console.log("++++++++");
        console.log("GET /:ID/ ITEMS COLLECTIONS", result.rows);
        console.log("++++++++");
        callback(error, result.rows)
      }
    })
  };

  let collectionLike = (userId, collectionId, callback) => {
    let query = "INSERT INTO collection_likes (collection_id, user_id) VALUES ($1, $2)";
    let values = [collectionId, userId];
    console.log("COLLECTION LIKEEEEEE", values);
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        console.log(error);
        callback(error, null);
      } else {
        console.log("++++++++");
        console.log("COLLECTION LIKED:::::::+++++++", result.rows[0]);
        console.log("++++++++");
        callback(error, result.rows[0])
      }
    })
  };

  let collectionUnlike = (userId, collectionId, callback) => {
    let query = "DELETE FROM collection_likes WHERE user_id=$1 AND collection_id=$2";
    let values = [userId, collectionId];
    console.log("COLLECTION DELETE PLZZZZ", values);
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        console.log(error);
        callback(error, null);
      } else {
        console.log("++++++++");
        console.log("COLLECTION UNLIKED:::::::+++++++", result.rows[0]);
        console.log("++++++++");
        callback(error, result.rows[0])
      }
    })
  };

  let collectionCheck = (userId, collectionId, callback) => {
    let query = "SELECT * FROM collection_likes WHERE user_id=$1 AND collection_id=$2";
    let values = [userId, collectionId];
    // console.log("COLLECTION LIKEEEEEE", values);
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        console.log(error);
        callback(error, null);
      } else {
        console.log("++++++++");
        console.log("CHECK COLLECTION LIKE:::::::+++++++", result.rows[0]);
        console.log("++++++++");
        // callback(error, result.rows[0])
        if (result.rows[0] != undefined) {
          result = true;
          callback(error, result)
          console.log(result);
        } else {
          result = false;
          callback(error, result)
          console.log(result);
        }
      }
    })
  };

  let checkAllLikes = (userId, callback) => {
    let query = 'SELECT collections.id as id, collections.name as name, collections.user_id as user_id, users.name as username, collections.created as created FROM collection_likes INNER JOIN collections on (collection_likes.collection_id = collections.id) WHERE collection_likes.user_id=$1';
    let values = [userId];
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        console.log(error);
        callback(error, null);
      } else {
        console.log("::::::::::::CHECK ALL LIKES:::::::+++++++", result.rows);
        callback(error, result.rows)
      }
    })
  }

  return {
    homepage, 
    allCollections, collections, addCollection, deleteCollection,
    createUser, logInUser, userPage, dashboard, dashboardCollection,
    addItemSelections, addItemSelections2, addItem, itemCollections,
    deleteItemsFromCollection, deleteItem, collectionLike, collectionCheck, checkAllLikes,
    collectionUnlike
  };
};