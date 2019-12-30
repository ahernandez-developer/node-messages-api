
const Model = require("./model");




async function getMessages(filterUser) {
  let filter = {};
  if (filterUser != null) {
    filter = {
      user: filterUser
    };
  }
  const messages = await Model.find(filter);
  return messages;
}

function addMessage(message) {
  const newMessage = new Model(message);
  console.log(message);
  newMessage.save();
}

async function updateMessage(id, message) {
  const foundMessage = await Model.findOne({ _id: id });
  foundMessage.message = message;

  const updatedMessage = await foundMessage.save();
  return updatedMessage;
}

async function deleteMessage(id) {
  return Model.deleteOne({ _id: id });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  update: updateMessage,
  delete: deleteMessage
};
