//import express from 'express';
const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

const router = require('./network/web');
router(app);

app.use("/",express.static("public"));

app.listen(3000);

console.log("server is running on http://localhost:3000");