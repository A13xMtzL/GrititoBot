module.exports = async (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("Mi ready is body")
  client.user.setActivity("Ser feliz :')", { type: "PLAYING" });
}
