const Discord = require('discord.js');
var client = new Discord.Client();
client.login(process.env.TOKEN);

client.on("ready", () => {
    let channel = client.channels.get("channel id");
    if(!channel) return console.log("Channel introuvable.");
    channel.join().then(connection => { console.log(`Connecré au salon ${channel}`);
    }).catch(e => {console.error(e)});
});
