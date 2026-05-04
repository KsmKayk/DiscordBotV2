# SoddenBot

Bot de música para Discord com comandos de utilidade para gerenciamento de servidores.

## Requisitos

- Node.js 12+
- Yarn
- Token de bot do Discord ([Discord Developer Portal](https://discord.com/developers/applications))
- FFmpeg (incluído via `ffmpeg-static`)

## Instalação

```bash
yarn install
```

Copie o arquivo de exemplo e preencha as variáveis:

```bash
cp .env.example .env
```

| Variável | Descrição |
|---|---|
| `BOT_TOKEN` | Token do seu bot no Discord |
| `PREFIX` | Prefixo dos comandos (padrão: `!`) |

## Executando

```bash
yarn dev
```

## Comandos

### Música

| Comando | Descrição |
|---|---|
| `!play <nome>` | Toca uma música ou playlist do YouTube |
| `!skip` | Pula para a próxima música da fila |
| `!stop` | Para a reprodução e limpa a fila |

### Utilidade

| Comando | Descrição |
|---|---|
| `!ping` | Exibe a latência do bot e da API |
| `!help` | Lista todos os comandos disponíveis |
| `!clear <quantidade>` | Deleta mensagens do canal (máx. 100) — requer role **Owner** |

## Permissões

Alguns comandos exigem a role **Owner** no servidor. Crie uma role com esse nome exato e atribua aos membros que devem ter acesso.

## Stack

- [discord.js](https://discord.js.org/) v12
- [DisTube](https://distube.js.org/) — gerenciador de fila de música
- [@discordjs/opus](https://github.com/discordjs/opus) — codec de áudio
- [ffmpeg-static](https://github.com/eugeneware/ffmpeg-static) — processamento de áudio
- [dotenv](https://github.com/motdotla/dotenv) — variáveis de ambiente

---

<sub>O bot inclui suporte a canais marcados como NSFW no Discord. Os comandos `!togglensfw` (role Owner) e `!nsfw <categoria>` ficam disponíveis apenas em canais com a flag NSFW ativada.</sub>
