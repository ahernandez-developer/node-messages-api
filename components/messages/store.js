const Message = require("./model");

async function getMessages(chat) {
  return new Promise((resolve, reject) => {
    Message.find({ chat: chat })
      .populate("chat")
      .exec((error, populatedData) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populatedData);
      });
      
  });
}

function addMessage(message) {
  const newMessage = new Message(message);
  console.log(message);
  newMessage.save();
}

async function updateMessage(id, message) {
  const foundMessage = await Message.findOne({ _id: id });
  foundMessage.message = message;

  const updatedMessage = await foundMessage.save();
  return updatedMessage;
}

async function deleteMessage(id) {
  return Message.deleteOne({ _id: id });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  update: updateMessage,
  delete: deleteMessage
};
