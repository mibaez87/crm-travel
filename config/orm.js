var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  getToday: function(tableInput, cols, deposit, cancel, final, cb) {
    var queryString = `SELECT ${cols.toString()} FROM ${tableInput} WHERE (${deposit} = CURDATE()) OR (${cancel} = CURDATE()) OR (${final} = CURDATE())`;
    connection.query(queryString, function(err, result) {
      if (err){
        throw err
      }
      cb(result);
    });
  },
  getTodayFlights: function(tableInput, cols, departure, arrival, cb) {
    var queryString = `SELECT ${cols.toString()} FROM ${tableInput} WHERE (${departure} = CURDATE()) OR (${arrival} = CURDATE())`;
    connection.query(queryString, function(err, result) {
      if (err){
        throw err
      }
      cb(result);
    });
  },
  findMultiple: function(tableInput, cols, cb){
    // select an unknown number of columns from a table
    var queryString = `SELECT ${cols.toString()} FROM ${tableInput}`;
    connection.query(queryString, function(err, result) {
      if (err){
        throw err
      }
      cb(result);
    });
  },
  // Selects one client by ID
  findOne: function(tableInput, column_name, value, cb) {
    var queryString = "SELECT * FROM " + tableInput + " WHERE " + column_name + " = ?";
    connection.query(queryString, [value], function(err,result){
      if (err){
        throw err
      }
      cb(result);
    });
  },
  // vals is an array of values that we want to save to cols
  // cols are the columns we want to insert the values into
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // objColVals would be the columns and values that you want to update
  // an example of objColVals would be {name: panther, sleepy: true}
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;