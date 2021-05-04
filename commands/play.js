module.exports.run = async (client, message, args) => {
  if (!message.member.voice.channel)
    return message.channel.send(
      "Você deve estar em um canal de voz para usar esse comando."
    );

  client.distube.play(message, args.join(" "));
};
