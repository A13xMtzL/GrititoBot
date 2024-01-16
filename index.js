const Discord = require("discord.js");
// Trae las variables de entorno
// const env = require("dotenv");
const prefix = "<<";

const bot = new Discord.Client({
  description:
    "Esto es un bot de prueba, aún no sabemos qué estamos haciendo xd\nCualquier duda, guárdesela",
  intents: [
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
  ],
});

bot.login(
  "MTA1NDQ5NzgyNDE2NDgxNDk2MQ.GVYGgo.iDbf5lUviNZrWet5GVuE7FqG3USyMgnytxROjo"
);

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag} and is ready! `);
});

// // bot.on("message", (message) => {
// //   if (message.author.bot) return; // Evitar responder a otros bots o a sí mismo
// //   console.log("Contenido del mensaje: " + message.content.toString());
// //   message.channel.send("El mensaje que se mandó fue: " + message.content);
// //   message.channel.send("I received your message!");
// // });

bot.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  const command = message.content.slice(prefix.length).trim().split(' ')[0];

  if (command === "ping") {
    const latency = Date.now() - message.createdTimestamp;
    message.channel.send(`**pong!** \t Latency: ${latency}ms`);
  }
});

