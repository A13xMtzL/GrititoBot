const { Client, Intents } = require("discord.js");
const Discord = require("discord.js");
const client = new Client({

  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag} and is ready! `);
});

const hasPermission = (message) => {
  if (message.member.id !== config.ownerID) {
    message.reply("You don't have permission to use this command");
    return false;
  }
  return true;
};

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // List of commanda
  if (command === "ping") {
    const latency = Date.now() - message.createdTimestamp;
    message.channel.send(`**Pong!** \t Latency: ${latency}ms`);
  }

  if (command === "hello") {
    let [age, sex, location] = args;
    message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
  }

  if (command === "say") {
    if (!hasPermission(message)) return;

    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  }

  if (command === "kick") {
    if (!hasPermission(message)) return;

    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    member.kick(reason);
  }

  if (command === "ban") {
    if (!hasPermission(message)) return;
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    member.ban(reason);
  }

  if (command === "purge") {
    if (!hasPermission(message)) return;

    let amount = args.join(" ");
    if (isNaN(amount)) return message.reply("That doesn't seem to be a valid number");
    if (amount <= 0 || amount > 100) return message.reply("Enter a number between 1 and 100");

    message.channel.bulkDelete(amount);

  }

  // command that deletes añl the messages in a channel
  if (command === "delete") {
    if (!hasPermission(message)) return;

    message.channel.messages.fetch().then((results) => {
      message.channel.bulkDelete(results);
    });
  }

  if (command === "embed") {
    // Create a embed message
    const embed = new Discord.MessageEmbed()
      .setTitle("This is a embed message")
      .setColor(0xff0000)
      .setDescription("Hello, this is a embed message")
      .setFooter("This is a footer")
      .setThumbnail(message.author.avatarURL())
      .setAuthor(message.author.username);

    message.channel.send(embed);

  }

  if (command === "avatar") {
    let member = message.mentions.members.first();
    if (member) {
      message.channel.send(member.user.displayAvatarURL());
    } else {
      message.channel.send("User not found.");
    }
  }

  if (command === "server") {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  }

  if (command === "user-info") {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  }

  if (command === "random") {
    let number = Math.floor(Math.random() * 100) + 1;
    message.channel.send(number);
  }

  if (command === "help") {
    message.channel.send(`
    \n ${config.description}\n
    Lista de comandos disponibles: \n
   **${config.prefix}ping** - Muestra el ping del bot \n
   **${config.prefix}hello** - Saluda al usuario \n
   **${config.prefix}say** - Repite el mensaje del usuario \n
   **${config.prefix}kick** - Expulsa a un usuario \n
   **${config.prefix}ban** - Banea a un usuario \n
   **${config.prefix}purge** - Borra una cantidad de mensajes \n
   **${config.prefix}delete** - Borra todos los mensajes del canal \n
   **${config.prefix}avatar** - Muestra el avatar de un usuario \n
   **${config.prefix}server** - Muestra información del servidor \n
   **${config.prefix}user- nfo** - Muestra información del usuario \n
   **${config.prefix}info** - Muestra información del bot \n
   **${config.prefix}random** - Muestra un número aleatorio \n
   **${config.prefix}help** - Muestra esta lista de comandos \n
    `);
  }

  if (command === "info") {
    const embed = new Discord.MessageEmbed()
      .setTitle(message.guild.name)
      .setDescription("Que tranza prro, soy GrititoBot, tu bot preferido\nNo le juegues al vrgas que si te puteo")
      .setColor('#0099ff')
      .addField('Server created at', message.guild.createdAt)
      .addField('Server Owner', message.guild.owner)
      .addField('Server Region', message.guild.region)
      .addField('Server ID', message.guild.id)
      .setThumbnail('https://cdn.discordapp.com/attachments/766881421243449355/807196535980425226/image0.jpg')
      .setTimestamp()
      .setFooter('Created by @27a13xml');

    message.channel.send(embed);
  }

  if (command === "randomM") {
    const listGifs = [
      'https://media.giphy.com/media/EXHHMS9caoxAA/giphy.gif',
      'https://media.giphy.com/media/NQL7Wuo2JSQSY/giphy.gif',
      'https://media.giphy.com/media/myuLckXB7OjfGw1gSb/giphy.gif',
      'https://media.giphy.com/media/quO0X65yj6gw0/giphy.gif',
      'https://media.giphy.com/media/LYd7VuYqXokv20CaEG/giphy.gif',
      'https://media.giphy.com/media/JNgLZn7fWAjjW/giphy.gif',
      'https://media.giphy.com/media/lFmmcqA4VBhMQ/giphy.gif',
      'https://media.giphy.com/media/V4NnsmEY7hsK4/giphy.gif',
      'https://hayunalesbianaenmisopa.com/wp-content/uploads/2017/06/pride-orgullo22.gif'
    ]
    const random = Math.floor(Math.random() * listGifs.length)
    message.channel.send(listGifs[random])
  }
});

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on('ready', () => {
  let game = { name: "Ser Feliz :'c", type: "PLAYING" };
  client.user.setPresence({ status: 'online', activity: game });
  console.log('My Ready is Body');
});



// Secret token for the bot
client.login(config.token);