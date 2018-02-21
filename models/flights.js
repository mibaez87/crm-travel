var orm = require("../config/orm.js");

var flight = {
    all: function(cb) {
      orm.all("trips", function(res) {
        cb(res);
      });
    },
    findOne: function(dep_date, cb){
      orm.findOne("trips", "dep_date", dep_date, cb);
    },
    findMultiple: function(cols){
        orm.findMultiple("trips", ["client_id", "deposit_due", "cancellation_deadline", "final_payment"], cb);
    },
    create: function(name, cb) {
      orm.create("trips", [
        "client_name", "primary_contact", "primary_phone", "primary_email", "preferred_dep_airport", "payment_type", "active"
      ], [
        name, contact, phone, email, depAir, payment, true
      ], cb);
    },
    update: function(id, cb) {
      var condition = "id=" + id;
      orm.update("trips", {
        active: false
      }, condition, cb);
    }
  };
  
  module.exports = flight;