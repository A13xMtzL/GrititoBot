module.exports = {
  name: 'avatar',
  description: 'Muestra el avatar del usuario mencionado',
  run: async (client, message, args) => {
    let member = message.mentions.members.first();
    if (member) {
      message.channel.send(member.user.displayAvatarURL());
    } else {
      message.channel.send("User not found.");
    }
  }
}