const routes = require('express').Router();

const contactsController = require('../controllers/contacts');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

routes.use('/api-docs', swaggerUi.serve);

routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.get('/', contactsController.getAllData);


routes.get('/:id', contactsController.getSingleData);

routes.post('/create', contactsController.postData);

routes.put('/update/:id', contactsController.updateData);

routes.delete('/delete/:id', contactsController.deleteData);

module.exports = routes;
