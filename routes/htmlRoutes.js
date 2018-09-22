var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.askanything.findAll({}).then(function(dbaskanything) {
      res.render("index", {
        msg: "Welcome!",
        dbaskanything: dbaskanything
      });
    });
  });

  app.get("/searchhistory", function(req, res) {
    db.askanything.findAll({}).then(function(dbaskanything) {
      res.render("searchhistory", {
        msg: "Welcome!",
        dbaskanything: dbaskanything
      });
    });
  });

  app.get("/glossary", function(req, res) {
    db.glossary.findAll({}).then(function(dbglossary) {
      res.render("glossary", {
        msg: "Welcome!",
        dbglossary: dbglossary
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/askanything/:id", function(req, res) {
    db.askanything.findOne({ where: { id: req.params.id } }).then(function(dbaskanything) {
      res.render("example", {
        dbaskanything: dbaskanything
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
