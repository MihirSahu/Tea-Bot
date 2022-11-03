import { Client, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";

dotenv.config();

export const token: string | undefined = process.env.DISCORD_TOKEN;
export const clientId: any = process.env.clientId;
export const guildId: any | undefined = process.env.guildId;

console.log("Bot is starting...");
console.log(`Discord token: ${token}`);

export const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildScheduledEvents]});

//command(client);
client.login(token);
