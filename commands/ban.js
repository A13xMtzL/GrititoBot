module.exports = {
  name: 'ban',
  description: 'Banea a un usuario del servidor',
  run: async (client, message, args) => {
    if (!message.member.permissions.has('BAN_MEMBERS')) return;

    let member = message.mentions.members.first();
    if (!member) {
      message.reply('Por favor menciona al miembro que quieres banear.');
      return;
    }

    if (!member.bannable) {
      message.reply('No puedo banear a este miembro.');
      return;
    }
    let reason = args.slice(1).join(" ");
    if (!reason) {
      message.reply('Por favor, indica una razón.');
      return;
    }
    member.ban({ reason: reason })
      .then(() => message.channel.send(`${member} fue baneado del servidor. Pipipipi :'c \nRazón: ${reason}`))
      .catch(error => message.reply('No pude banear al miembro.'));
  }
}