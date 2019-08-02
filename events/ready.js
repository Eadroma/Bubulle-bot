const word = require("../assets/config-app.json");
module.exports = (client) => {
  console.log(word.ready);
  client.user.setActivity(word.help);
  client.user.setStatus(word.online);
  
  
}