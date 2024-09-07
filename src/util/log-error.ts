import { TextChannel } from 'discord.js';
import logger from 'consola';
import env from '@util/env';
import bot from '..';

export default async (err: Error, message?: string) => {
    logger.error(message ? message + err : err);

    if (bot.discord.isReady()) {
        ((await bot.discord.channels.fetch(env.ERROR_CHANNEL_ID)) as TextChannel).send(
            err.stack ?? `${err.name}: ${err.message}`
        );
    }
};