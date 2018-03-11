const Discord = require('discord.js');
const client = new Discord.Client();
var os = require("os");
var fs = require('fs');
var path = require("path");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
  
client.on('message', msg => {
    if (msg.content === 'printmessages') {
        msg.reply();
        console.log(msg.channel.fetchMessages())
    }
});

//Keep super secrets
client.login('NDIyNDg0ODI0ODU1NTQzODE4.DYckuw.obHBvQ5fsNNJ1Ix24tBy4mjXWOw');