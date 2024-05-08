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

const postData = (req, res, next) => {

//      mongodb.getDb().db("Contacts").collection("contacts").insert(req.body, (error, result) => {
//         if(error) {
//             return res.status(500).send(error);
//         }
//         res.send(result.result);
//     });
// };

    // const contacts = await mongodb.postDb().db("Contacts").collection("contacts");
    // var newContact = new Contact();

    // newContact.firstName = req.body.firstName;
    // newContact.lastName = req.body.lastName;
    // newContact.email = req.body.email;
    // newContact.favoriteColor = req.body.favoriteColor;
    // newContact.birthday = req.body.birthday;

    //     //save the new document
    //     newContact.save((err, obj) => {
    //         if (err) {
    //             //return err response if incountered
    //             res.status(422).json({status: false, error: "Error in creating item"}); 
    //         }
    //         else {
    //             //return success response
    //             res.status(200).json({status: true, message: "Item successfully created"}); 
    //         }
    //     })
    // }

}
module.exports = {getSingleData, getAllData, postData};