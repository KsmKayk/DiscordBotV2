module.exports.run = async (client, message, args) => {
  function verifyPermission() {
    let isAdm = false;
    let allowedRole = message.guild.roles.cache.find(
      (role) => role.name === "Owner"
    );

    message.member.roles.cache.map((role, id) => {
      if (id === allowedRole.id) {
        isAdm = true;
      }
    });

    return isAdm;
  }

  let isAdm = verifyPermission();

  if (isAdm) {
    let channel = message.channel;
    if (channel.nsfw == true) {
      channel.edit({ nsfw: false });
      return message.channel.send("Conteudo adulto desligado!");
    }
    if (channel.nsfw == false) {
      channel.edit({ nsfw: true });
      return message.channel.send("Conteudo adulto ligado!");
    }
  }

  if (!isAdm) {
    return message.reply("Apenas moderadores podem usar este comando");
  }
};
