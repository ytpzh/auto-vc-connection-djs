const Discord = require('discord.js');
var client = new Discord.Client();
const {token, channelID} = require('./config.json')
client.login(token);

client.on("ready", () => {
    let channel = client.channels.cache.get(channelID);
    if(!channel) return console.log("Channel introuvable.");
    channel.join().then(() => { console.log(`Connecté au salon ${channel.name}`);
    }).catch(e => {console.error(e)});
});
