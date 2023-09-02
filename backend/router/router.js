require('dotenv').config();
const bodyParser = require("body-parser");
const {addUser,getslots,addParkingSpace,getslots_name_image}=require("../database/SchemaFunctions");
const {connect}=require('../database/Schema');
connect();
const express = require("express");
const app = express();

const {signUp,logIn}=require("../database/authentication");


const path = require("path");
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.post("/api/user",addUser);
app.get("/api/slots",getslots);
app.get("/api/slots/name",getslots_name_image);
app.post("/api/parking_slot/",addParkingSpace);


app.post("/api/signup",signUp);
app.post("/api/login",logIn);


app.use(express.static(path.join(__dirname,"../dist/")));
app.get("*", (req, res) => {
 res.sendFile(path.join(__dirname, "../dist", "index.html"));
});
app.listen(5000, () => {
  console.log("server started on port 5000");
});