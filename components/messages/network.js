const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({dest: 'public/uploads/'});

const response = require("../../network/response");
const controller = require("./controller");


router.get("/", function(req, res) {
  const filterMessage = req.query.chat || null;
  
  controller
    .getMessages(filterMessage)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, "unexpected error", 500, e);
    });
});

router.post("/",upload.single("file"), function(req, res) {
  controller
    .create(req.body.chat, req.body.user, req.body.message,req.file)
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(e => {
      response.error(req, res, "Error inesperado", 500, e);
    });
});

router.patch("/:id", function(req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, "error inesperado", 500, e);
    });
});

router.delete("/:id", function(req, res) {
  controller
    .deleteMessage(req.params.id)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => response.error(req, res, "error inesperado", 500, e));
});
module.exports = router;
