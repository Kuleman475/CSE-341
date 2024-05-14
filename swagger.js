const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "My API", 
        description: "Contacts",
    },
    host: "localhost:8080", 
    schemes: ['http'], 
    };

const outputFile = './swagger.json';
const endPoints = ['./routes/contacts.js']

swaggerAutogen(outputFile, endPoints, doc);