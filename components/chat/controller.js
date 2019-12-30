const store = require('./store');

function createChat(users){
    if(!users || !Array.isArray(users))
    {
        return Promise.reject("el chat debe ser de mas de un usuario");
    }
    const chat = {
        users: users,
    }
    return store.create(chat);
}

function getChats(userId)
{
    return store.get(userId);
}

module.exports = {
    createChat: createChat,
    getChats:getChats
}