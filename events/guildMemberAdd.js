const Discord = require('discord.js');

module.exports = async (client, member) => {
  // Create a welcome message
  const welcomeEmbed = new Discord.MessageEmbed()
    .setColor('#ffcc00')
    .setTitle('¡Bienvenido!')
    .setDescription(`¡Hola ${member.user.username}! Bienvenido/a a nuestro servidor.`)
    .addField('Reglas', 'Por favor, asegúrate de leer las reglas del servidor antes de comenzar a participar.')
    .addField('Roles', 'Si deseas obtener acceso a canales adicionales, por favor, solicita los roles correspondientes en el canal de bienvenida.')
    .setFooter('¡Disfruta de tu estancia en nuestro servidor!');

  // Send the welcome message to a specific channel
  const welcomeChannel = client.channels.cache.get('YOUR_WELCOME_CHANNEL_ID');
  if (welcomeChannel) {
    welcomeChannel.send(welcomeEmbed);
  }
}
