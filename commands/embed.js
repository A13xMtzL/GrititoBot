const Discord = require("discord.js");

module.exports = {
  name: 'embed',
  description: 'Muestra un mensaje embebido',
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
      .setTitle("This is a embed message")
      .setColor(0xff0000)
      .setDescription("Hello, this is a embed message")
      .setFooter("This is a footer")
      .setThumbnail(message.author.avatarURL())
      .setAuthor(message.author.username);

    message.channel.send(embed);

  }
}