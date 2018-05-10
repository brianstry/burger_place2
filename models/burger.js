var orm = require("../config/orm.js");

var burgers = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
          cb(res);
        });
      },

    insertOne: function(tableInsert, cb) {
    orm.insertOne(tableInsert, function(res) {
      cb(res);
    });
  },

  update: function(updateWhere, cb) {
    orm.update(updateWhere, function(res) {
      cb(res);
    });
  }
};

module.exports = burgers;
