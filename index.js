const { Client, Intents } = require("discord.js");
const client = new Client({

  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag} and is ready! `);
});
// // client.on("message", (message) => {
// //   if (message.author.bot) return; // Evitar responder a otros bots o a sí mismo
// //   console.log("Contenido del mensaje: " + message.content.toString());
// //   message.channel.send("El mensaje que se mandó fue: " + message.content);
// //   message.channel.send("I received your message!");
// // });

// client.on("message", (message) => {
//   if (!message.content.startsWith(prefix)) return;

//   const command = message.content.slice(prefix.length).trim().split(' ')[0];

//   if (command === "ping") {
//     const latency = Date.now() - message.createdTimestamp;
//     message.channel.send(`**pong!** \t Latency: ${latency}ms`);
//   }
// });

client.on("message", (message) => {

  if (message.author.bot) return;
  if (message.author.id !== config.ownerID) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    const latency = Date.now() - message.createdTimestamp;
    message.channel.send(`**Pong!** \t Latency: ${latency}ms`);
  }
});



// Secret token for the bot
client.login(config.token);