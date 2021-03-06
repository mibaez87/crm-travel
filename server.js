var express = require("express");
var bodyParser = require("body-parser");


var PORT = process.env.PORT || 8000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var clientRoutes = require("./controllers/clientsController.js");
var flightRoutes = require("./controllers/flightsController.js");

app.use(clientRoutes);
app.use(flightRoutes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});