const mongodb = require("../db/connect");
const ObjectId = require('mongodb').ObjectId;

const getAllData = async (req, res, next) => {
const contacts = await mongodb.getDb().db("Contacts").collection("contacts").find();
    contacts.toArray().then((list) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(list);
    });
};

const getSingleData = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);

    const contact = await mongodb.getDb().db("Contacts").collection("contacts").find({ _id: userId });
        contact.toArray().then((list) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json(list[0]);
        });
    };

module.exports = {getSingleData, getAllData};