const store = require("./store");

function create(user,message){
    return new Promise((resolve,reject)=>{
        if(user==null || message == null)
        {
            console.error("messageController: incorrect data");
            reject("incorrect data");    
            return false;
        }
        else{
            const NewMessage = {
                user: user,
                message:message,
                date: new Date()
            };
            console.log(NewMessage);
            store.add(NewMessage);
            resolve(NewMessage);
            return true;
        }
        
    });

}

function getMessages(){
    return new Promise((resolve,reject) =>{
        resolve(store.list());
    })    
}

module.exports = {
    create,
    getMessages
}