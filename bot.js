console.log("Welcome to the singularity!!!😎 ")

const Discord = require('discord.js');
const client = new Discord.Client();
const env = require('./config/environment.js');
require('dotenv').config();

//console.log(process.env);
//temporarily here :) 
client.login(process.env.TOKEN_DISCORD);

client.on('ready',function(){
    console.log("let's go!!");
});

const commandHandler = require('./commands');

//using commandHandler feature of discord
client.on('message',commandHandler);