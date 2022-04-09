const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767 });

const config = require("./Configs/Bots_Config.json");

client.on("ready", () => {
    client.user.setActivity(config.Activity);
});

client.on("guildMemberAdd", member => {
    const channel = client.channels.cache.get('956172750106525746')
    if (!channel) return;
    channel.send(`${member.displayName} Has Joined !`)
})

client.on("messageCreate", message => {
    if (message.author.bot) return;
    if (message.content.startsWith(config.Prefix)) {
        switch (message.content) {
            case config.Prefix + "ping":
                message.channel.send("Pong ! Calcul en cours...").then(msg => {
                    msg.edit(`Pong ! Latence : ${msg.createdTimestamp - message.createdTimestamp}`)
                })
            default:
                return;
        }
    }
})

client.login(config.Token);