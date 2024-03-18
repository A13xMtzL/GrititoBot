exports.run = async (client, message, args) => {
  message.channel.send("pong!")
    .cath(console.error);
}

exports.name = "ping";