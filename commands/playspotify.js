const Discord = require('discord.js');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: '23d9d9557033449c9af169245e4937ab',
  clientSecret: '24c61e4d11bc4aa0abc2cf89d9557baf',
  token: 'BQCqzKkYy1A2qJ4sa0ATT981ctSv8iZSi-SWVIKERAoqdhA6VLxm0hiBSU1uNH97TRGpshyCfLhjHuOqHlCJovr4f6Yt0HkUyuhocDC0vIvqjAlfF-nJkG86cTSDcS95n4fk8NMzZZy0kqgIf3WXDpeRLZQLouFPrK9dBym5stHRqQB1CCzexvzEVcEy6YHaOaWbYoM-kjXZzaYBEMhJyYMUGe5du-8jjcm_BYwxP3j0-4VNOkfDGxoyh9sAIXyAmkG9FA'
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function(err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
);
module.exports = {
  name: 'playspotify',
  description: 'Play a song from Spotify',
  run: async (client, message, args) => {
    // Verifica si el usuario está en un canal de voz
    if (!message.member.voice.channel) {
      return message.channel.send('Debes estar en un canal de voz para reproducir música.');
    }

    // Verifica si se proporcionó un término de búsqueda
    if (!args.length) {
      return message.channel.send('Debes proporcionar un término de búsqueda.');
    }

    // Realiza la búsqueda en Spotify
    try {
      const searchResults = await spotifyApi.searchTracks(args.join(' '));
      const firstTrack = searchResults.body.tracks.items[0];

      if (!firstTrack) {
        return message.channel.send('No se encontraron resultados.');
      }

      // Muestra información sobre la canción
      const embed = new Discord.MessageEmbed()
        .setTitle(firstTrack.name)
        .setDescription(`Artista: ${firstTrack.artists[0].name}\nAlbum: ${firstTrack.album.name}\nEscuchar en Spotify: [Enlace](${firstTrack.external_urls.spotify})`)
        .setThumbnail(firstTrack.album.images[0].url);

      message.channel.send(embed);
    } catch (error) {
      console.error('Error al buscar en Spotify:', error);
      message.channel.send('Ocurrió un error al buscar en Spotify.');
    }
  }
};