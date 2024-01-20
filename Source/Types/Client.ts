import { Client, Collection } from "discord.js";
import { Commands } from "./Command";

export interface CustomClient extends Client<true> {
	commands: Collection<string, Commands>;
}
