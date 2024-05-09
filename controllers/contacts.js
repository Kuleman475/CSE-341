const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllData = async (req, res, next) => {
  const contacts = await mongodb.getDb().db('Contacts').collection('contacts').find();
  contacts.toArray().then((list) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(list);
  });
};

const getSingleData = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);

  const contact = await mongodb.getDb().db('Contacts').collection('contacts').find({ _id: userId });
  contact.toArray().then((list) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(list[0]);
  });
};

const postData = async (req, res, next) => {
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const contacts = await mongodb
    .getDb()
    .db('Contacts')
    .collection('contacts')
    .insertOne(newContact);
  if (contacts.acknowledged) {
    res.status(201).json(contacts);
  } else {
    res.status(500).json(contacts.error || 'Some error occurred while creating the contact.');
  }
};

const updateData = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);

  const updateContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const contact = await mongodb
    .getDb()
    .db('Contacts')
    .collection('contacts')
    .replaceOne({ _id: userId }, updateContact);

  if (contact.acknowledged) {
    res.status(204).json(contact);
  } else {
    res.status(500).json(contact.error || 'Some error occurred while updating the contact.');
  }
};

const deleteData = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);

    const contact =  await mongodb
    .getDb()
    .db('Contacts')
    .collection('contacts')
    .deleteOne({ _id: userId });

    if (contact.acknowledged) {
        res.status(208).json(contact);
      } else {
        res.status(500).json(contact.error || 'Some error occurred while deleting the contact.');
      }

};

module.exports = { getSingleData, getAllData, postData, updateData, deleteData };
