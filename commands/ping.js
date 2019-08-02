exports.run = (client, message, args, functions) => {
  message.channel.send(':ping_pong:');
}

exports.help = {
  name: "ping",
  desc: "pong tching tchong"
}