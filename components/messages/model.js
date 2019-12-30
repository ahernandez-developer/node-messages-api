const mongoose = require(mongoose);

const Schema = mongoose.schema;

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

const model = mongoose.model("messages",mySchemma);

module.exports(model);