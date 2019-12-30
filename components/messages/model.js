const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    chat:{
        type:Schema.ObjectId,
        ref:"chats"
    },
    user: {
        type:Schema.ObjectId,
        ref: "Users"
    },
    message: {
        type: String,
        required: true,

    },
    date: Date,
    file:String
});

const Model = mongoose.model("messages",MessageSchema);

module.exports=Model;