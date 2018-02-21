var express = require("express");

var router = express.Router();
var flight = require("../models/flights.js");

router.get("/flights", function(req, res) {
    // express callback response by calling burger.selectAllBurger
    flight.all(function(flightData) {
      // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
      res.render("maindashboard", { client_data: flightData });
    });
  });

//api route
router.get("/api/flights", function(req, res){
    flight.all(function(data){
      res.json(data);
    });
  });

router.get("/api/flights/:dep_date", function(req, res){
    flight.findOne(req.params.dep_date, function(data){
        res.json(data);
    });
});

router.get("/api/deadlines/", function(req, res){
    flight.findMultiple(function(data){
        res.json(data);
    });
});

module.exports = router;