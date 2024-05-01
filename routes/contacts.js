const routes = require("express").Router();

const contactsController = require("../controllers");

routes.get("/", contactsController.contacts);

module.exports = routes;