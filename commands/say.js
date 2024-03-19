module.exports = {
  name: 'say',
  description: 'Repite lo que dices',
  run: async (client, message, args) => {
    if (message.content.length <= 0) return;

    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  }
  
}