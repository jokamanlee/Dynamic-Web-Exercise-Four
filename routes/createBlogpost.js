//Create a blog post

const express = require("express");
const router = express.Router();
//Require Firebase
const firebase = require("firebase");
//Initialize Firestore Database
const db = firebase.firestore();
//Reference a specfic collection
const blogposts = db.collection("blogposts");

const form = `
    <form action="/create/submit">
        <input type="text" name="title" placeholder="Title of Post"/>
        <input type="text" name="text" placeholder="Text of Post"/>
        <input type="text" name="author" placeholder="Author"/>
        <button type="submit">Submit Post</>
    </form>
`;

router.get("/", (req, res) => res.send(form));
// Route for submitting the form....
router.get("/submit", (req, res) => {
  const queryParams = req.query; // ?title=words&text=words&author=words

  const idFromTitle = queryParams.title.replace(/\s+/g, "-").toLowerCase();

  blogposts
    .doc(idFromTitle)
    .set(queryParams)
    .then(function (doc) {
      res.send("Successful Submission");
    })
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Submission");
    });
});

module.exports = router;
