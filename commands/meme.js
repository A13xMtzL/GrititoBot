module.exports = {
  name: 'meme',
  description: 'Muestra un meme aleatorio',
  run: async (client, message, args) => {
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
}