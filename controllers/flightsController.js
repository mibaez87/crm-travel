var express = require("express");

var router = express.Router();
var flight = require("../models/flights.js");

router.get("/flights", function(req, res) {
    flight.all(function(flightData) {
      res.render("maindashboard", { client_data: flightData });
    });
  });

// WORKING -- Gets all flights
router.get("/api/flights", function(req, res){
    flight.all(function(data){
      res.json(data);
    });
  });

// WORKING -- Gets all flights based on user input for date
router.get("/api/flights/:dep_date", function(req, res){
    flight.findOne(req.params.dep_date, function(data){
        res.json(data);
    });
});

// WORKING -- Gets all deadlines
router.get("/api/deadlines/", function(req, res){
    flight.findMultiple(function(data){
        res.json(data);
    });
});

module.exports = router;