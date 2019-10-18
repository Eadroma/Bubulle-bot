const word = require("../assets/app-config.json");
module.exports = (client) => {
  console.log(word.ready);
  client.user.setActivity(word.help);
	client.user.setStatus(word.online);
	
  }