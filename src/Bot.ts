import { Client, GatewayIntentBits, Guild, TextChannel } from "discord.js";
import {PurgeTea} from './Purge'
import * as dotenv from "dotenv";

dotenv.config();

export const token: string | undefined = process.env.DISCORD_TOKEN;
export const clientId: any = process.env.clientId;
export const guildId: any | undefined = process.env.guildId;
export const { REST } = require('@discordjs/rest');

console.log("Bot is starting...");
console.log(`Discord token: ${token}`);

export const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildScheduledEvents]});

// const channelId = '1037586167111094372';
const channelId = '1037611770375852072';

client.once("ready", async c => {
    console.log('BOT ONLINE')
    let guild: Guild | null | void  = await c.guilds.cache.get(guildId)
    const teaChannel = guild?.channels.cache.get(channelId) as TextChannel;
    
    PurgeTea(teaChannel)
});


//command(client);
client.login(token);