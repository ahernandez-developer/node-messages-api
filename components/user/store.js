const User = require("./model");
async function getUser(id){
    const user =await User.findOne({_id:id});
    return user;
}

function createUser(userData){
    const user = new User(userData);
    return user.save();
}

module.exports = {
    create: createUser,
    get: getUser,
}