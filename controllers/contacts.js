const mongodb = require("../db/connect");

const getData = async (req, res, next) => {
const contacts = await mongodb.getDb().db("Contacts").collection("contacts").find();
    contacts.toArray().then((list) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(list[0]);
    });
};

module.exports = {getData};