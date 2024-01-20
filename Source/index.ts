import * as fs from "fs";
import * as path from "path";
import "dotenv/config";
import { Client, Collection, GatewayIntentBits } from "discord.js";
import { CustomClient } from "./Types/Client";

const client: CustomClient = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
}) as CustomClient;

client.commands = new Collection();

const commandsFolderPath = path.join(__dirname, "Commands");
const commandsFolder = fs.readdirSync(commandsFolderPath);

for (const folder of commandsFolder) {
	const commandsPath = path.join(commandsFolderPath, folder);
	const commandsFiles = fs
		.readdirSync(commandsPath)
		.filter((file) => file.endsWith(".ts") || file.endsWith(".js"));

	for (const file of commandsFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);

		if ("data" in command && "execute" in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.error(
				`[WARNING] The command at ${filePath} is missing required properties (e.g. data or execute).`,
			);
		}
	}
}

const eventsFolderPath = path.join(__dirname, "Events");
const eventsFiles = fs
	.readdirSync(eventsFolderPath)
	.filter((file) => file.endsWith(".ts") || file.endsWith(".js"));

for (const file of eventsFiles) {
	const eventPath = path.join(eventsFolderPath, file);
	const event = require(eventPath);

	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(process.env.BOT_TOKEN);
