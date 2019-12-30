const store = require("./store");

function getUser(id) {
  return store.get(id);
}

function createUser(username) {
  if (!username) {
    return Promise.reject("no se envio un nombre");
  }

  const user = {
    userName: username
  };
  return store.create(user);
}

module.exports = { createUser, getUser };
