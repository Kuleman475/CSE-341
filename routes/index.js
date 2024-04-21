const routes = require("express").Router();

const myController = require("../controllers");

routes.get("/", myController.awesomeFunc);

module.exports = routes;