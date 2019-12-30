const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.post("/",function(req,res){
    controller.createChat(req.body.users)
    .then(data=>response.success(req,res,data,201))
    .catch(error=>response.error(req,res,"Internal error",500,error));
});

router.get("/:userId",function(req,res){
    controller.getChats(req.params.userId)
    .then(users=>response.success(req,res,users,200))
    .catch(error=>response.error(req,res,"Internal error",500,error)); 
});

module.exports = router;