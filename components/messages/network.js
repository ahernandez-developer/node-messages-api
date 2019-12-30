const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get("/",function(req,res){
    controller.getMessages().then((data)=>{
        response.success(req,res,data,200);
    }).catch(
        e=>{
            response.error(req,res,'unexpected error',500,e);
        }
    ); 
});

router.post("/",function(req,res){
    controller.create(req.body.user,req.body.message).then((data)=>{
        response.success(req,res,data,201);
    }).catch(e=>{
        response.error(req,res,"Error inesperado",500,e);    
    });
});


module.exports = router;