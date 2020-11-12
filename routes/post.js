//Query one blog post
const express = require("express");

const router = express.Router();

//Require Firebase
const firebase = require("firebase");
//Initialize Firestore Database
const db = firebase.firestore();
//Reference a specfic collection
const blogposts = db.collection("blogposts");
//If there is no ID provided, send this message
router.get("/", (req, res) => res.send("No ID Provided"));
//Get the query parameter from the URL and set it to a variable
router.get("/:id", (req, res) => {
  //Query the collection
  const queryId = req.params.id;
  blogposts
    .doc(queryId) //looking up a document by id
    .get()
    .then(function (doc) {
      if (doc.exists) {
        //Checking if the document exists
        const data = doc.data(); //Assigning the document data to a variable
        return res.send(doc.data()); //send data to user who queries
      } else {
        //If no document exists send message
        return res.send("No document exists");
      }
    })
    .catch(function (error) {
      return res.send(error);
    });
});

module.exports = router;
