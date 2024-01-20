import { CommandInteraction, SlashCommandBuilder } from "discord.js";

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Replies with pong!"),
	execute: async function (interaction: CommandInteraction) {
		interaction.reply("Pong!");
	},
};
