import { ApplicationCommandOptionType, PermissionFlagsBits } from "discord.js";
import { Command } from "../client/Command";
import { PurgeLogic } from "../logic/purgeLogic";

export default new Command(
{
    name: "purge",
    description: "purge a channel",
    options: [
        {
            name: 'how_many',
            description:'1-100 or all',
            type: ApplicationCommandOptionType.String,
            required: true
        }],
        defaultMemberPermissions: PermissionFlagsBits.Administrator,
        
    run: async ({ interaction }) => 
    {
        await new PurgeLogic().Purge(interaction);
    }
});