const routes = require('express').Router();

const contactsController = require('../controllers/contacts');

routes.get('/', contactsController.getAllData);

routes.get('/:id', contactsController.getSingleData);

routes.post('/create', contactsController.postData);

routes.put('/update/:id', contactsController.updateData);

module.exports = routes;
