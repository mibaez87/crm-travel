var express = require("express");

var router = express.Router();
var flight = require("../models/flights.js");

// WORKING API ROUTE -- Gets all of today's flights for all clients
router.get("/api/todayflights", function (req, res) {
    flight.getTodayFlights(function (data) {
        res.json(data);
    });
});

// WORKING HTML ROUTE -- Displays all of today's flights for all clients on maindashboard
router.get("/", function (req, res, next) {
    flight.getTodayFlights(function (flyToday) {
        // res.render("maindashboard", { fly_today: flyToday });
        flight.getToday(function (dueNow) {
            res.render("maindashboard", { 
                due_today: dueNow, 
                fly_today: flyToday
            });
        });
    });
});

// WORKING API ROUTE -- Gets all of today's deadlines for all clients
router.get("/api/todaydeadlines", function (req, res) {
    flight.getToday(function (data) {
        res.json(data);
    });
});

// WORKING HTML ROUTE -- Displays all of today's deadlines for all clients on maindashboard
// router.get("/", function (req, res) {
    
// });

// WORKING HTML ROUTE -- Displays all of today's deadlines for all clients on futuredeadlines
// router.get("/futuredeadlines", function (req, res) {
//     flight.getToday(function (dueNow) {
//         res.render("futuredeadlines", { due_today: dueNow });
//     });
// });

// WORKING API ROUTE -- Gets all deadlines within the next two weeks
router.get("/api/twoweekdeadlines", function (req, res) {
    flight.getTwoWeek(function (data) {
        res.json(data);
    });
});

// WORKING API ROUTE -- Gets all deadlines within the next month
router.get("/api/monthlydeadlines", function (req, res) {
    flight.getMonth(function (data) {
        res.json(data);
    });
});

// WORKING HTML ROUTE -- Displays all deadlines within the next month
router.get("/futuredeadlines", function (req, res) {
    flight.getMonth(function (nextThirty) {
        res.render("futuredeadlines", { next_thirty: nextThirty });
    });
});

// WORKING HTML ROUTE -- Displays all of today's flights for all clients on futuredeadlines
// router.get("/futuredeadlines", function (req, res) {
//     flight.getTodayFlights(function (flyToday) {
//         res.render("futuredeadlines", { fly_today: flyToday });
//     });
// });

// WORKING API ROUTE -- Gets all flights departing or arriving within the next week
router.get("/api/oneweekflights", function (req, res) {
    flight.getOneWeekFlights(function (data) {
        res.json(data);
    });
});

// WORKING HTML ROUTE -- Displays all flights departing or arriving within the next week
// router.get("/futuredeadlines", function (req, res) {
//     flight.getOneWeekFlights(function (flyWeek) {
//         res.render("futuredeadlines", { fly_week: flyWeek });
//     });
// });

// WORKING API ROUTE -- Gets all flights departing or arriving within the next month
router.get("/api/monthlyflights", function (req, res) {
    flight.getMonthFlights(function (data) {
        res.json(data);
    });
});

// WORKING API ROUTE -- Gets all flights
router.get("/api/flights", function (req, res) {
    flight.all(function (data) {
        res.json(data);
    });
});

// WORKING API ROUTE -- Gets all flights based on user input for date
router.get("/api/flights/:dep_date", function (req, res) {
    flight.findOne(req.params.dep_date, function (data) {
        res.json(data);
    });
});

module.exports = router;