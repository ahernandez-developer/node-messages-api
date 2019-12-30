const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    users: [
        {type:Schema.ObjectId,
        ref: "Users"}
    ],
});

const model = mongoose.model("chats",ChatSchema);

module.exports = model;