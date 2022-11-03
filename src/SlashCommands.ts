import { Client, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";

    export const commands = [
        new SlashCommandBuilder().setName('redact').setDescription('automatically redacts a name that you don\'t want mentioned.'),
    ]	