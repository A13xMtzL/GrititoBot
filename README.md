# GrititoBot

GrititoBot is a Discord bot built with Node.js and the Discord.js library. It offers a variety of commands for server moderation, music playback, and more.

## Features

- Server moderation commands such as `ban`, `kick`, `purge`, and `delete`.
- Music playback commands from both direct links and Spotify with commands like `play`, `pause`, `resume`, `skip`, `queue`, `shuffle`, `jump`, and `clear`.
- Utility commands like `ping`, `info`, `help`, and `user-info`.
- Fun commands like `meme` and `say`.

## Setup

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Create a `.env` file in the root directory and add your bot token like so: `DISCORD_BOT_TOKEN=your-bot-token`.
4. Run the bot with `npm start`.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

Please make sure to update tests as appropriate.

## Commands

Here are some of the commands that GrititoBot supports:

- `ping`: Shows the bot's latency in ms.
- `info`: Shows information about the bot.
- `help`: Shows all available commands.
- `play`: Plays a song from a provided URL or Spotify.
- `pause`: Pauses the current song.
- `resume`: Resumes the paused song.
- `skip`: Skips the current song.
- `queue`: Shows the current song queue.
- `shuffle`: Shuffles the song queue.
- `jump`: Jumps to a specific song in the queue.
- `clear`: Clears the song queue.

For a full list of commands, use the `help` command.

## License

This project is licensed under the ISC License.