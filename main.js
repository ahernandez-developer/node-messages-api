const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require("cors");
const bodyParser = require('body-parser');
const router = require('./network/web');
const socket = require("./socket");
const db = require('./db');

db("mongodb+srv://alinrealin:210220123@cluster0-tr0ss.mongodb.net/telegram");

socket.connect(server);
router(app);
app.use(cors());
app.use(bodyParser.json());
app.use("/",express.static("public"));

server.listen(3000,function(){
    console.log("server is running on http://localhost:3000");
});

