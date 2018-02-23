var connection = require("./connection.js");
var moment= require("moment")

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
  // Selects all columns and rows from a specific table
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Selects all deadlines that include today's date
  getToday: function(tableInput, cols, deposit, cancel, final, cb) {
    var queryString = `SELECT ${cols.toString()} FROM ${tableInput} WHERE (${deposit} = CURDATE()) OR (${cancel} = CURDATE()) OR (${final} = CURDATE())`;
    connection.query(queryString, function(err, result) {
      if (err){
        throw err
      }
      cb(result);
    });
  },
  // Selects all deadlines within the next two weeks from today's date
  getTwoWeek: function(tableInput, cols, deposit, cancel, final, cb) {
    var today= moment();
    var twoWeeks= today.add(14, "days");
    var queryString = `SELECT ${cols.toString()} FROM ${tableInput} WHERE (${deposit} < "${twoWeeks}") OR (${cancel} < "${twoWeeks}") OR (${final} < "${twoWeeks}")`;
    connection.query(queryString, function(err, result) {
      if (err){
        throw err
      }
      cb(result);
    });
  },
  // Selects all deadlines within the next month from today's date
  getMonth: function(tableInput, cols, deposit, cancel, final, cb) {
    var today= moment();
    var monthDeadlines= today.add(30, "days");
    var queryString = `SELECT ${cols.toString()} FROM ${tableInput} WHERE (${deposit} < "${monthDeadlines}") OR (${cancel} < "${monthDeadlines}") OR (${final} < "${monthDeadlines}")`;
    connection.query(queryString, function(err, result) {
      if (err){
        throw err
      }
      cb(result);
    });
  },
  // Selects all flights that depart or arrive on today's date
  getTodayFlights: function(tableInput, cols, departure, arrival, cb) {
    var queryString = `SELECT ${cols.toString()} FROM ${tableInput} WHERE (${departure} = CURDATE()) OR (${arrival} = CURDATE())`;
    connection.query(queryString, function(err, result) {
      if (err){
        throw err
      }
      cb(result);
    });
  },
  // Selects all flights that depart or arrive within one week from today's date
  getOneWeekFlights: function(tableInput, cols, departure, arrival, cb) {
    var today= moment();
    var sevenDays= today.add(7, "days");
    console.log(sevenDays);
    var queryString = `SELECT ${cols.toString()} FROM ${tableInput} WHERE (${departure} < "${sevenDays}") OR (${arrival} < "${sevenDays}")`;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err){
        throw err
      }
      cb(result);
    });
  },
  // Selects all flights that depart or arrive within one month from today's date
  getMonthFlights: function(tableInput, cols, departure, arrival, cb) {
    var today= moment();
    var thirtyDays= today.add(30, "days");
    console.log(thirtyDays);
    var queryString = `SELECT ${cols.toString()} FROM ${tableInput} WHERE (${departure} < "${thirtyDays}") OR (${arrival} < "${thirtyDays}")`;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err){
        throw err
      }
      cb(result);
    });
  },
  // Selects multiple columns from a specific table
  findMultiple: function(tableInput, cols, cb){
    var queryString = `SELECT ${cols.toString()} FROM ${tableInput}`;
    connection.query(queryString, function(err, result) {
      if (err){
        throw err
      }
      cb(result);
    });
  },
  // Selects client by ID
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