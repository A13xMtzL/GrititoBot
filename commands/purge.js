module.exports = {
  name: 'purge',
  description: 'Elimina la cantidad de mensajes especificada',
  run: async (client, message, args) => {
    const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
      return message.reply('Eso no parece ser un número válido. Échale coco mi rey 😎');
    } else if (amount <= 1 || amount > 100) {
      return message.reply('Debes ingresar un número entre 1 y 99.');
    }

    message.channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
      message.channel.send('Hubo un error al intentar eliminar los mensajes. Ni modo 😔');
    });
  }
}