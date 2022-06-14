import { bot } from "../../index.js";
import { MessageEmbed } from "discord.js";
import { successColor, missingPermsEmbed } from "../resources/consts.js";

export default {
	name: "command",
	description: "Sends a command in-game!",
	type: "CHAT_INPUT",
	options: [
		{
			"type": 3,
			"name": "command",
			"description": "What command would you like to run?",
			"required": true
		}
	],
 
	run: async (client, interaction, args) => {
		if (!interaction.member.roles.cache.some((role) => role.name === "Staff")) {
			return interaction.followUp({ embeds: [missingPermsEmbed], ephemeral: false });
		}
        
		bot.chat(`/${args[0]}`);
		const embed = new MessageEmbed()
			.setTitle("Sent!")
			.setColor(successColor)
			.setDescription(
				`The command \`${args[0]}\` has been sent!`
			);
		return interaction.followUp({ embeds: [embed] });
	},
};