const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports.run = async (client, message, args, discord) => {
  let channel = message.channel;
  if (channel.nsfw == true) {
    let image = await nsfw.boobs();
    let embed = new discord.MessageEmbed()
      .setTitle(`Here's your daily dose of boobs`)
      .setImage(image);
    switch (args[0]) {
      case "boobs":
        image = await nsfw.boobs();
        embed = new discord.MessageEmbed()
          .setTitle(`Here's your daily dose of boobs`)
          .setImage(image);
        message.channel.send(embed);
        break;
      case "pussy":
        image = await nsfw.pussy();
        embed = new discord.MessageEmbed()
          .setTitle(`Here's your daily dose of pussy`)
          .setImage(image);
        message.channel.send(embed);
        break;
      case "ass":
        image = await nsfw.ass();
        embed = new discord.MessageEmbed()
          .setTitle(`Here's your daily dose of ass`)
          .setImage(image);
        message.channel.send(embed);
        break;
      case "anal":
        image = await nsfw.anal();
        embed = new discord.MessageEmbed()
          .setTitle(`Here's your daily dose of anal`)
          .setImage(image);
        message.channel.send(embed);
        break;
      case "solo":
        image = await nsfw.solo();
        embed = new discord.MessageEmbed()
          .setTitle(`Here's your daily dose of solo`)
          .setImage(image);
        message.channel.send(embed);
        break;

      case "porngif":
        image = await nsfw.pgif();
        embed = new discord.MessageEmbed()
          .setTitle(`Here's your daily dose of porngif`)
          .setImage(image);
        message.channel.send(embed);
        break;
      case "lewd":
        image = await nsfw.lewd();
        embed = new discord.MessageEmbed()
          .setTitle(`Here's your daily dose of lewd`)
          .setImage(image);
        message.channel.send(embed);
        break;
      case "hentai":
        image = await nsfw.hentai();
        embed = new discord.MessageEmbed()
          .setTitle(`Here's your daily dose of hentai`)
          .setImage(image);
        message.channel.send(embed);
        break;
      case "wallpaper":
        image = await nsfw.wallpaper();
        embed = new discord.MessageEmbed()
          .setTitle(`Here's your daily dose of porn wallpaper`)
          .setImage(image);
        message.channel.send(embed);
        break;
    }
  }
  if (channel.nsfw == false) {
    return message.reply(
      "Este comando só pode ser usado em canais adultos, para habilitar o uso desse comando neste canal use !togglensfw"
    );
  }
};
