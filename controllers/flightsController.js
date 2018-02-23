var express = require("express");

var router = express.Router();
var flight = require("../models/flights.js");

router.get("/flights", function(req, res) {
    flight.all(function(flightData) {
      res.render("maindashboard", { client_data: flightData });
    });
  });

// WORKING API ROUTE -- Gets all flights
router.get("/api/flights", function(req, res){
    flight.all(function(data){
      res.json(data);
    });
  });

// WORKING API ROUTE-- Gets all flights based on user input for date
router.get("/api/flights/:dep_date", function(req, res){
    flight.findOne(req.params.dep_date, function(data){
        res.json(data);
    });
});

// WORKING API ROUTE -- Gets all deadlines for all clients
router.get("/api/deadlines/", function(req, res){
    flight.findMultiple(function(data){
        res.json(data);
    });
});

// WORKING API ROUTE -- Gets all of today's deadlines for all clients
router.get("/api/todaydeadlines", function(req, res){
    flight.getToday(function(data){
        res.json(data);
    });
});

// WORKING API ROUTE -- Gets all of today's flights for all clients
router.get("/api/todayflights", function(req, res){
    flight.getTodayFlights(function(data){
        res.json(data);
    });
});

module.exports = router;