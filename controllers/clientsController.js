var express = require("express");

var router = express.Router();
var client = require("../models/clients.js");

// get route -> index
// router.get("/", function(req, res) {
//   res.redirect("/clients");
// });

router.get("/clientlist", function(req, res) {
  client.all(function(clientData) {
      console.log(clientData);
    res.render("clientlist", { client_data: clientData });
  });
});

// WORKING
router.get("/api/clients", function(req, res) {
  client.all(function(clientData) {
    res.json(clientData);
  });
});

//html route
router.get("/client/:id", function(req, res){
  client.findOne(req.params.id,function(data){
    res.render("maindashboard", {client_data: data});
  });
});

//api route
router.get("/api/client/:id", function(req, res){
  client.findOne(req.params.id,function(data){
    res.json(data);
  });
});

// post route -> back to index
router.post("/clients/create", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  client.create((req.body.client_name, req.body.primary_contact, req.body.primary_phone, req.body.primary_email, req.body.preferred_dep_airport, req.body.payment_type), function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/clients/:id", function(req, res) {
  client.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;
