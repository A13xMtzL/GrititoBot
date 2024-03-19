module.exports = {
  name: 'delete',
  description: 'Elimina todos los mensajes del canal',
  run: async (client, message, args) => {
    if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply('No tienes permisos para eliminar mensajes.');

    message.channel.messages.fetch().then((results) => {
      message.channel.bulkDelete(results);
    });
  }
};