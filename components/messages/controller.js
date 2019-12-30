const store = require("./store");

function getMessages(filterChat) {
  return new Promise((resolve, reject) => {
    if (filterChat != null) {
      console.log("resolvio");
      resolve(store.list(filterChat));
    } else reject("no se envio el usuario");
  });
}


function create(chat,user, message) {
  return new Promise((resolve, reject) => {
    if (chat==null || user == null || message == null) {
      console.error("messageController: incorrect data");
      reject("incorrect data");
      return false;
    } else {
      const NewMessage = {
        chat:chat,
        user: user,
        message: message,
        date: new Date()
      };
      console.log(NewMessage);
      store.add(NewMessage);
      resolve(NewMessage);
      return true;
    }
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Invalid data");
      return false;
    } else {
      const result = await store.update(id, message);
      resolve(result);
    }
  });
}

function deleteMessage(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject("no viene el id");
      return false;
    } else {
      store
        .delete(id)
        .then(() => {
          resolve("mensaje eliminado");
        })
        .catch(e => reject(e));
    }
  });
}
module.exports = {
  create,
  getMessages,
  updateMessage,
  deleteMessage
};
