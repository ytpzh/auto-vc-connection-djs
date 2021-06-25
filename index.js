const Discord = require('discord.js');
var client = new Discord.Client();
client.login("token");

client.on("ready", () => {
    let channel = client.channels.cache.get("channel id");
    if(!channel) return console.log("Channel introuvable.");
    channel.join().then(() => { console.log(`Connecté au salon ${channel}`);
    }).catch(e => {console.error(e)});
});
