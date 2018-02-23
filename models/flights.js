var orm = require("../config/orm.js");

var flight = {
  all: function (cb) {
    orm.all("trips", function (res) {
      cb(res);
    });
  },
  findOne: function (dep_date, cb) {
    orm.findOne("trips", "dep_date", dep_date, cb);
  },
  findMultiple: function (cb) {
    orm.findMultiple("trips", ["client_id", "deposit_due", "cancellation_deadline", "final_payment"], cb);
  },
  getToday: function (deposit, cancel, final, cb) {
    orm.getToday("trips", ["client_id", "deposit_due", "cancellation_deadline", "final_payment"], "deposit_due", "cancellation_deadline", "final_payment", deposit, cancel, final, cb);
  },
  getTwoWeek: function (deposit, cancel, final, cb) {
    orm.getTwoWeek("trips", ["client_id", "deposit_due", "cancellation_deadline", "final_payment"], "deposit_due", "cancellation_deadline", "final_payment", deposit, cancel, final, cb);
  },
  getMonth: function (deposit, cancel, final, cb) {
    orm.getMonth("trips", ["client_id", "deposit_due", "cancellation_deadline", "final_payment"], "deposit_due", "cancellation_deadline", "final_payment", deposit, cancel, final, cb);
  },
  getTodayFlights: function (departure, arrival, cb) {
    orm.getTodayFlights("trips", ["client_id", "dep_flight", "dep_airport", "dep_time", "arr_flight", "arr_airport", "arr_time"], "dep_date", "arr_date", departure, arrival, cb);
  },
  getOneWeekFlights: function (departure, arrival, cb) {
    orm.getOneWeekFlights("trips", ["client_id", "dep_flight", "dep_airport", "dep_time", "arr_flight", "arr_airport", "arr_time"], "dep_date", "arr_date", departure, arrival, cb);
  },
  create: function (name, cb) {
    orm.create("trips", [
      "client_name", "primary_contact", "primary_phone", "primary_email", "preferred_dep_airport", "payment_type", "active"
    ], [
        name, contact, phone, email, depAir, payment, true
      ], cb);
  },
  update: function (id, cb) {
    var condition = "id=" + id;
    orm.update("trips", {
      active: false
    }, condition, cb);
  }
};

module.exports = flight;