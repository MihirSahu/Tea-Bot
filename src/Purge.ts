import { EmbedBuilder, TextChannel } from "discord.js";

const cronJob = require('node-cron');

export async function PurgeTea(teaChannel: TextChannel){    
    //WILL DELETE MESSAGES EVERY 24 HRS AT MIDNIGHT
    cronJob.schedule('0 0 0 * * *', async () => {
        console.log('CRON JOB ACTIVE')
        let fetched;
        do{
            console.log('deleting messages')
            fetched = await teaChannel.messages.fetch({limit: 100});
            await teaChannel.bulkDelete(100).then(() => {

                const embed = new EmbedBuilder()
                    .setColor('#e0a23d')
                    .setTitle('THE TEA SET HAS BEEN CLEANED')
                    .setThumbnail('https://i.pinimg.com/originals/46/8a/a2/468aa2a896304b32a5930020f685ee97.gif')
                    .setDescription('All messages are deleted from this channel every 24 hours at midnight.')
                    .addFields(
                        {
                            name: `${new Date().toLocaleDateString()}`,
                            value: 'A new day begins, enjoy your tea while it lasts',
                            inline: true,
                        }
                    )
                teaChannel.send({embeds: [embed]});
            })
        }
        while(fetched.size >= 2)
    });
}
