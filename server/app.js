const express = require("express");
const router = require("./src/routes/api")
const app = new express();
const bodyParser = require("body-parser");

//middleware
const ratelimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

//database
const mongoose = require("mongoose");

//security
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(bodyParser.json());

//
const limiter = ratelimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

//Mongodb database connection

let URI = `mongodb+srv://testuser107:testuser107@cluster0.m8fxg.mongodb.net/backend-task`;
let OPTION = { autoIndex:true}
mongoose.connect(URI, OPTION, (error) =>{
    console.log("Connection Success")
    console.log(error)
})


app.use("/api/v1", router);

app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "not found" });
});

module.exports = app;