var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, cb, function(result){
        cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }

//   Makev createOne
};


module.exports = burger;