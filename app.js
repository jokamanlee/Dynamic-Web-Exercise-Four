const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

//Configuration Values for Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD1sqAG91I26r1zcC8V9b0yVR65NyS0zfM",
  authDomain: "exercise-four-2020.firebaseapp.com",
  databaseURL: "https://exercise-four-2020.firebaseio.com",
  projectId: "exercise-four-2020",
  storageBucket: "exercise-four-2020.appspot.com",
  messagingSenderId: "523313050268",
  appId: "1:523313050268:web:b618a354d75efb05f43359",
  measurementId: "G-QXYHXTKQ1C",
};
//Firebase
const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

// Routes Import
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createBlogpost.js");

// Routes
app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

app.listen(port, () =>
  console.log(`Exercise Four is running at localhost:${port}`)
);
