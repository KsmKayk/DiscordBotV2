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

  if (isAdm == true) {
    if (!args[0]) {
      return message.reply(
        "Coloque a quantidade de mensagens que deseja deletar"
      );
    }

    if (isNaN(args[0])) {
      return message.reply("Por favor coloque um numero real");
    }

    if (args[0] > 100) {
      return message.reply(
        "Quantidade de deletes muito alta, quantidade máxima = 100, por favor diminuir a quantidade de deletes"
      );
    }

    if (args[0] < 0) {
      return message.reply("Você deve deletar no minimo 1 mensagem");
    }

    await message.channel.bulkDelete(args[0]);
  }
  if (isAdm == false) {
    return message.reply("Apenas moderadores podem usar este comando");
  }
};
