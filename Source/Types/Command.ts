import { SlashCommandBuilder, CommandInteraction } from "discord.js";

export interface Commands {
	data: SlashCommandBuilder;
	execute: (interaction: CommandInteraction) => Promise<void>;
}
