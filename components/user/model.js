const mongoose = require("mongoose");
const Schema =mongoose.Schema;

const UserSchema = new Schema({
    userName:String,
    // name:String,
    // lastName:String,
    // born:Date,
    // createdAt:Date,
    // updatedAt: Date,
    // profileImage:String,      
});

const model = mongoose.model("Users",UserSchema);

module.exports = model;