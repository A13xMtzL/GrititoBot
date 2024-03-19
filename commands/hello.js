module.exports = {
  name: 'hello',
  description: 'Saluda al usuario con su edad, sexo y ubicación',
  run: async (client, message, args) => {
    let [age, sex, location] = args;
    message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
  }
};