var db = require("../models");
var path = require("path")

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/frontend.html"));
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
