module.exports = {
  name: 'ping',
  description: 'Muestra el ping del bot en ms',
  run : async (client, message, args) => {
  const latency = Date.now() - message.createdTimestamp;
  message.channel.send("**Pong!** \t Latency: " + latency + "ms")
    .catch(console.error);
}}
