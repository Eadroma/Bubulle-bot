const word = require("../assets/app-config.json");
module.exports = (client) => {
  console.log(word.ready);
  client.user.setActivity({ name: word.help });
  client.user.setStatus(word.online);
}