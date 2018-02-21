var orm = require("../config/orm.js");

var client = {
  all: function(cb) {
    orm.all("clients", function(res) {
      cb(res);
    });
  },
  findOne: function(id, cb){
    orm.findOne("clients", "id", id, cb);
  },
  create: function(name, cb) {
    orm.create("clients", [
      "client_name", "primary_contact", "primary_phone", "primary_email", "preferred_dep_airport", "payment_type", "active"
    ], [
      name, contact, phone, email, depAir, payment, true
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("clients", {
      active: false
    }, condition, cb);
  }
};

module.exports = client;