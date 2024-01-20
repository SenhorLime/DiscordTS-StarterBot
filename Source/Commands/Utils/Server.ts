import { CommandInteraction, SlashCommandBuilder } from "discord.js";

module.exports = {
	data: new SlashCommandBuilder()
		.setName("server")
		.setDescription("Provides information about the server"),
	execute: async function (interaction: CommandInteraction) {
		await interaction.reply(
			`This server is ${interaction.guild!.name} and has ${interaction.guild!.memberCount} members.`,
		);
	},
};
