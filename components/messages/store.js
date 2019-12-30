const db = require('mongoose');
db.Promise = global.Promise;
db.connect("mongodb+srv://alinrealin:210220123@cluster0-tr0ss.mongodb.net/test",{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

console.log("[db] conectado con exito a mongoDB atlas");

function addMessage(message){
    list.push(message);
}

function getMessages(){
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessages,
}