import { TextChannel } from "discord.js";

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
                teaChannel.send('deleted 100 messages');
            })
        }
        while(fetched.size >= 2)
    });
}