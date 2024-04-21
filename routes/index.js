const routes = require("express").Router();
routes.get("/", (req, res, next) => {
    res.json("Awesom Person");
});

module.exports = routes;