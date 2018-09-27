var db = require("../models");

module.exports = function (app) {
  // Get all examples
  // SELECT * from tablename;
  app.get("/api/askanything/:question", function (req, res) { //api calls/routes
    db.askanything.findAll({ where: { question: req.params.question } }).then(function (dbaskanything) {
      console.log(dbaskanything);
      res.json(dbaskanything);
    });
  });

  // ("api/search", (req, res) {
  //   console.log(req)
  //   findAll({
  //     //construct search syntax
  //   })
  // })

  // Create a new example
  app.post("/api/askanything", function (req, res) {

    var addToDB = {
      question: req.body.text,
      answer: req.body.description
    };
    db.askanything.create(addToDB).then(function (dbaskanything) {
      res.json(dbaskanything);
    });
  });

  app.get("/api/glossary/:question", function (req, res) { //api calls/routes
    db.glossary.findAll({ where: { question: req.params.question } }).then(function (dbglossary) {
      console.log(dbglossary);
      res.json(dbglossary);
    });
  });

  app.post("/api/glossary", function (req, res) {
    var addToDB = {
      question: req.body.text,
      answer: req.body.description
    };
    db.glossary.create(addToDB).then(function (dbglossary) {
      res.json(dbglossary);
    });
  });
};

/*var searchHistory = require("../models/searchHistory");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/searchhistory", function(req, res) {
    res.json(searchHistory);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the searchHistory array)
  // ---------------------------------------------------------------------------

  app.post("/api/searchhistory", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    if (searchHistory.length < 5) {
      searchHistory.push(req.body);
      res.json(true);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    searchHistory.length = [];
    res.json({ ok: true });
  });
};*/