module.exports.run = async (client, message, args) => {
  message.channel.send(
    "```!Help -> Mostra todos os comandos disponiveis pelo bot```" +
      "```!Ping -> Verifica o ping entre o bot e o servidor```" +
      "```!Clear (quantidade) -> Apaga a quantidade de mensagens especificada [No máximo 100]```" +
      "```!Play (nome)-> Pesquisa o nome e toca a musica no canal de voz que você está```" +
      "```!Stop -> Para de tocar a musica```" +
      "```!Skip -> Pula para a proxima musica da playlist/queue```" +
      "```!ToggleNsfw -> Habilita ou Desabilita conteudo adulto na sala do discord```" +
      "```!Nsfw (nome) -> Envia uma imagem nsfw para a sala [boobs, pussy, ass, anal, wallpaper, porngif, lewd, hentai]```"
  );
};
