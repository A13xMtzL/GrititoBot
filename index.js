// --------------------------------------------------------------------------------------------------------------------
const {Client, Intents, Collection } = require("discord.js");
const fs = require("fs");
const { Player } = require('discord-player');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

const config = require("./config.json");

client.config = config;
client.commands = new Collection();

const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
}

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  console.log(`Attempting to load command ${command.name}`)
}

client.on('message', message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).run(client, message, args);
  } catch (error) {
    console.error(error);
    message.reply('Hubo un error al intentar ejecutar ese comando!');
  }
});

// client.Player = new Player(client, {
//   leaveOnEmpty: true,
//   leaveOnEnd: true,
//   leaveOnStop: true, 
//   leaveOnEmptyCooldown: 60000,
//   autoSelfDeaf: true,
//   initialVolume: 50,
// });


client.login(config.token);
