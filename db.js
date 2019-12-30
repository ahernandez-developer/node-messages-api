const db = require("mongoose");
db.Promise = global.Promise;
// "mongodb+srv://alinrealin:210220123@cluster0-tr0ss.mongodb.net/telegram"
async function connect(connectionString) {
  await db.connect(
    connectionString,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  console.log("[db] conectado con exito a mongoDB atlas");
}

module.exports = connect;