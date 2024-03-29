const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.get("/:id",function(req,res){
   controller.getUser(req.params.id)
   .then(data=>response.success(req,res,data,200))
   .catch(error=>response.error(req,res,"Internal error",500,error));
});

router.post("/",function(req,res){
    controller.createUser(req.body.username).then(data=>
        response.success(req,res,data,201))
    .catch(e=>response.error(req,res,"Internal error",500,e));
});


module.exports =router;