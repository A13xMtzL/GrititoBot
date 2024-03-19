module.exports = {
  name: 'kick',
  description: 'Kick a member from the server',
  run: async (client, message, args) => {
    if (!message.member.permissions.has('KICK_MEMBERS')) return;

    let member = message.mentions.members.first();
    if (!member) {
      message.reply('Por favor menciona al miembro que quieres expulsar.');
      return;
    }

    if (!member.kickable) {
      message.reply('No puedo expulsar a este miembro.');
      return;
    }
    let reason = args.slice(1).join(" ");
    if (!reason) {
      message.reply('Por favor, indica una razón.');
      return;
    }
    member.kick(reason)
      .then(() => message.channel.send(`${member} fue sacado del servidor. Pipipipi :'c \nRazón: ${reason}`))
      .catch(error => message.reply('No pude expulsar al miembro.'));
  }
};