const routes = require("express").Router();

const contactsController = require("../controllers/contacts");

routes.get("/", contactsController.getData);

module.exports = routes;