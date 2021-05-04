const discord = require("discord.js");
const client = new discord.Client();
const DisTube = require("distube");
const path = require("path");
const fs = require("fs");
const commandsFolder = path.resolve("commands");
const admCommandsFolder = path.resolve("admCommands");

// Bot start and set activity of itself
client.on("ready", () => {
  console.log(`Bot foi iniciado`);
  client.user.setActivity("Sad songs on Youtube", {
    type: "LISTENING",
  });
});

// Create a new DisTube
client.distube = new DisTube(client, {
  searchSongs: false,
  emitNewSongOnly: true,
});

// Verify message
client.on("message", async (message) => {
  // Ignores if it's dm, bot saying or not contain prefix
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(process.env.PREFIX)) return;

  // Command verifier
  const args = message.content
    .slice(process.env.PREFIX.length)
    .trim()
    .split(/ +/g);

  // Turn command into lowercase
  const command = args.shift().toLowerCase();

  fs.readdir(commandsFolder, (err, files) => {
    files.forEach((file) => {
      let fileWithoutExtension = file.split(".").slice(0, -1).join(".");
      if (command === fileWithoutExtension) {
        return require(`./commands/${command}.js`).run(
          client,
          message,
          args,
          discord
        );
      } else {
        return;
      }
    });
  });
});

// Queue status template
const status = (queue) =>
  `Filter: \`${queue.filter || "Off"}\` | Loop: \`${
    queue.repeatMode
      ? queue.repeatMode == 2
        ? "All Queue"
        : "This Song"
      : "Off"
  }\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

// Distube event listener

client.distube
  .on("playSong", (message, queue, song) =>
    message.channel.send(
      `Playing \`${song.name}\` - \`${
        song.formattedDuration
      }\`\nRequested by: ${song.user}\n${status(queue)}`
    )
  )
  .on("addSong", (message, queue, song) =>
    message.channel.send(
      `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    )
  )
  .on("playList", (message, queue, playlist, song) =>
    message.channel.send(
      `Play \`${playlist.name}\` playlist (${
        playlist.songs.length
      } songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${
        song.formattedDuration
      }\`\n${status(queue)}`
    )
  )
  .on("addList", (message, queue, playlist) =>
    message.channel.send(
      `Added \`${playlist.name}\` playlist (${
        playlist.songs.length
      } songs) to queue\n${status(queue)}`
    )
  );

// LogIn bot
client.login(process.env.BOT_TOKEN);
