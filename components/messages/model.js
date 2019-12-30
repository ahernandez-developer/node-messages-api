const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchemma = new Schema({
    user: {
        type:String,
        required:true
    },
    message: {
        type: String,
        required: true,

    },
    date: Date,
});

const Model = mongoose.model("messages",mySchemma);

module.exports=Model;