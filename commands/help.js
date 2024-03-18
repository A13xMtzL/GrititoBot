exports.run = async (client, message, args) => {
  message.channel.send(
    `${args.config.description}\n
    Lista de comandos disponibles: \n
    **${args.config.prefix}ping** - Muestra el ping del bot \n
    **${args.config.prefix}hello** - Saluda al usuario \n
    **${args.config.prefix}say** - Repite el mensaje del usuario \n
    **${args.config.prefix}kick** - Expulsa a un usuario \n
    **${args.config.prefix}ban** - Banea a un usuario \n
    **${args.config.prefix}purge** - Borra una cantidad de mensajes \n
    **${args.config.prefix}delete** - Borra todos los mensajes del canal \n
    **${args.config.prefix}avatar** - Muestra el avatar de un usuario \n
    **${args.config.prefix}server** - Muestra información del servidor \n
    **${args.config.prefix}user- nfo** - Muestra información del usuario \n
    **${args.config.prefix}info** - Muestra información del bot \n
    **${args.config.prefix}random** - Muestra un número aleatorio \n
    **${args.config.prefix}help** - Muestra esta lista de comandos \n
    **${args.config.prefix}meme** - Muestra un meme aleatorio \n
    `
  )
}