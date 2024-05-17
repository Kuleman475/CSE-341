const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "My API", 
        description: "Contacts",
    },
    host: "https://cse-341-week-4.onrender.com/contacts", 
    schemes: ['http'], 
    };

const outputFile = './swagger.json';
const endPoints = ['./routes/contacts.js']

swaggerAutogen(outputFile, endPoints, doc);