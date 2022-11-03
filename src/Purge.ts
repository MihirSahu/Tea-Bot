import { Client, Routes, ChatInputCommandInteraction, GuildChannelManager, InteractionCollector, Guild, Events, CategoryChannel, TextChannel } from "discord.js";
import { token, clientId, guildId, client } from './Bot';

const cronJob = require('node-cron');

const channelId = '1037586167111094372';

client.on(Events.ClientReady, async c => {
    let guild: Guild | null | void  = await c.guilds.cache.get(guildId)
    const teaChannel = guild?.channels.cache.get(channelId) as TextChannel;

    teaChannel?.clone();
    teaChannel?.delete();
});
