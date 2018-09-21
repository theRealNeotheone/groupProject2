var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // SELECT * from tablename;
  app.get("/api/askanything/:question", function(req, res) { //api calls/routes
    db.askanything.findAll({where: { question: req.params.question }}).then(function(dbaskanything) {
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
  app.post("/api/askanything", function(req, res) {

    var addToDB = {
      question: req.body.text,
      answer: req.body.description
    };

    db.askanything.create(addToDB).then(function(dbaskanything) {
      res.json(dbaskanything);
    });

  });

};
