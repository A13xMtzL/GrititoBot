const Discord = require("discord.js");

module.exports = {
  name: 'info',
  description: 'Muestra información sobre el bot',
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(message.guild.name)
    .setDescription("Que tranza prro, soy GrititoBot, tu bot preferido\nNo le juegues al vrgas que si te puteo")
    .setColor('#0099ff')
    .addField('Server created at', message.guild.createdAt)
    .addField('Server Owner', message.guild.owner)
    .addField('Server Region', message.guild.region)
    .addField('Server ID', message.guild.id)
    .setThumbnail('https://cdn.discordapp.com/attachments/766881421243449355/807196535980425226/image0.jpg')
    .setTimestamp()
    .setFooter('Bot created by @27a13xml');

  message.channel.send(embed);
  }
}
