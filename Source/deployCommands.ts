import * as fs from "fs";
import * as path from "path";
import "dotenv/config";
import { REST, Routes } from "discord.js";

const commands = [];

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
			commands.push(command.data.toJSON());
		} else {
			console.error(
				`[WARNING] The command at ${filePath} is missing required properties (e.g. data or execute).`,
			);
		}
	}
}

const rest = new REST().setToken(process.env.BOT_TOKEN as string);

(async () => {
	try {
		console.log(
			`Started refreshing ${commands.length} application (/) commands.`,
		);

		const data: any = await rest.put(
			Routes.applicationCommands(process.env.CLIENT_ID as string),
			{ body: commands },
		);

		console.log(
			`Successfully reloaded ${data.length} application (/) commands.`,
		);
	} catch (error) {
		console.error(error);
	}
})();
