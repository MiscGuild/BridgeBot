declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MINECRAFT_EMAIL: string;
			MINECRAFT_PASSWORD: string;
			MINECRAFT_AUTH_TYPE: "microsoft" | "mojang";

			MINECRAFT_CHAT_SEPARATOR: string;
			HYPIXEL_API_KEY: string;
			MINIMUM_NETWORK_LEVEL: number;

			DISCORD_TOKEN: string;
			DISCORD_PREFIX: string;
			DISCORD_INVITE_LINK: `discord.gg/${string}`;

			DISCORD_SERVER_ID: string;
			MEMBER_CHANNEL_ID: string;
			OFFICER_CHANNEL_ID: string;
			BLACKLIST_CHANNEL_ID: string;
			LOG_CHANNEL_ID: string;
			ERROR_CHANNEL_ID: string;
		}
	}
}

export {};