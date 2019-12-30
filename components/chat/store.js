const Chat = require("./model");

function create(newChat){
    const chat = new Chat(newChat);
    return chat.save();
}

function get(userId){
    return new Promise((resolve,reject)=>{
        let filter ={}
        if(userId)
        {
            filter = {users:userId}
        }
        Chat.find(filter).populate("users").exec((error,populatedData)=>{
            if(error){
                reject(error);
                return false;
            }
            resolve(populatedData);
        }); 
    });
}

module.exports = {
    get:get,
    create:create
}