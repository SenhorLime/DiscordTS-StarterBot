# Discord.ts - Template Bot

[LEIAME em Português](/Assets/LEIAME.md)

This is a simple template for start to develop a Discord bot using TypeScript and the Discord.js library. It includes a basic structure for building slash commands, listening to events and other configurations.

## Requirements

- Node.js (20.10.0 or later)
- npm (10.2.3 or later)
- TypeScript (5.3.3 or later)

## Installation

1. Clone this repository on your machine

```bash
  git clone https://github.com/SenhorLime/DiscordTS-StarterBot.git
```

2. Open the repository

```bash
  cd DiscordTS-StarterBot
```

3. Intall the node dependencies

```bash
  npm install
```

4. Modify the .env file
    - Change the environment variables on the `.env.example` file and rename it to `.env`

```env
  BOT_TOKEN = YOUR_BOT_TOKEN
  CLIENT_ID = YOUR_CLIENT_ID
```

## Usage

There are several commands available in the `package.json` file.

### Development mode
```bash
  npm run dev
```
Automatically updates the bot with each modification to the code.

### Deploy commands
```bash
  npm run deploy
```
Registers all your commands to the bot.

### Build
```bash
  npm run build
```
Compiles your TypeScript code to JavaScript.

### Start
```bash
  npm run start
```
Starts your bot after compiling to JavaScript.


## Project estructure

```
└── Source/
    ├── Commands/
    │   ├── Utils/
    │   │   ├── Ping.ts
    │   │   └── Server.ts
    │   └── Other/
    │       └── Write other commands inside another folders or inside the Utils folder
    ├── Events/
    │   ├── clientReady.ts
    │   └── interactionCreate.ts
    ├── Types/
    │   ├── Client.ts
    │   └── Command.ts
    ├── deployCommands.ts
    └── index.ts
```

## Personalization

- Add your own command to the folder `Source/Commands`
- Explore the [Discord.js](https://discordjs.org) documentation and the [TypeScript](https://www.typescriptlang.org/) documentation

## Contribution

Feel free to contribute, open issues or suggestions in this repository.