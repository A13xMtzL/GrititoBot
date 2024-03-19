module.exports = {
  name: 'help',
  description: 'Muestra todos los comandos disponibles',
  run: async (client, message, args) => {
    const { commands } = message.client;

    let helpMessage = 'Lista de comandos disponibles:\n\n';

    commands.map(command =>  {
      helpMessage += `${command.name}: ${command.description || 'No description provided'}\n`;
    });

    message.channel.send(`\`\`\`${helpMessage}\`\`\``);
  }
};