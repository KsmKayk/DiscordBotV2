module.exports.run = async (client, message, args) => {
  if (!message.member.voice.channel)
    return message.channel.send(
      "Você deve estar em um canal de voz para usar esse comando."
    );

  let queue = await client.distube.getQueue(message);

  if (queue) {
    client.distube.skip(message);

    message.channel.send("Musica pulada!");
  } else if (!queue) {
    return;
  }
};
