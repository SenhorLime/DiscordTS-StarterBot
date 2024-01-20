# DiscordTS - Starter Bot

Este é um modelo simples para começar a desenvolver um bot Discord usando TypeScript e a biblioteca Discord.js. Ele inclui uma estrutura básica para criar comandos slash, ouvir eventos e outras configurações.

## Requisitos

- Node.js (20.10.0 ou superior)
- npm (10.2.3 ou superior)
- TypeScript (5.3.3 ou superior)

## Instalação

1. Clone este repositório em sua máquina

```bash
  git clone https://github.com/SenhorLime/DiscordTS-StarterBot.git
```

2. Abra o repositório

```bash
  cd DiscordTS-StarterBot
```

3. Instale as dependências do Node.js

```bash
  npm install
```

4. Modifique o arquivo .env
    - Altere as variáveis de ambiente no arquivo `.env.example` e renomeie para `.env`

```env
  BOT_TOKEN = SEU_TOKEN_DO_BOT
  CLIENT_ID = SEU_ID_DO_CLIENTE
```

## Uso

Existem vários comandos disponíveis no arquivo `package.json`.

### Modo de Desenvolvimento
```bash
  npm run dev
```
Atualiza automaticamente o bot a cada modificação no código.

### Registrar comandos
```bash
  npm run deploy
```
Registra todos os seus comandos no bot.

### Compilar
```bash
  npm run build
```
Compila seu código TypeScript para JavaScript.

### Iniciar
```bash
  npm run start
```
Inicia o seu bot após compilar para JavaScript.

## Estrutura do Projeto

```
└── Source/
    ├── Commands/
    │   ├── Utils/
    │   │   ├── Ping.ts
    │   │   └── Server.ts
    │   └── Outros/
    │       └── Adicione outros comandos dentro de outras pastas ou dentro da pasta Utils
    ├── Events/
    │   ├── clientReady.ts
    │   └── interactionCreate.ts
    ├── Types/
    │   ├── Client.ts
    │   └── Command.ts
    ├── deployCommands.ts
    └── index.ts
```

## Personalização

- Adicione seus próprios comandos na pasta `Source/Commands`
- Explore a documentação do [Discord.js](https://discordjs.org) e a documentação do [TypeScript](https://www.typescriptlang.org/)

## Contribuição

Sinta-se à vontade para contribuir, abrir problemas ou sugestões neste repositório.
