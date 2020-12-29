console.log("Welcome to the singularity!!!😎 ")

const Discord = require('discord.js');
const client = new Discord.Client();
const env = require('./config/.env');

//temporarily here :) 
client.login(process.env.TOKEN);

client.on('ready',function(){
    console.log("let's go!!");
});

const replies = ['Namastey!!!! 🙏 ', 
                 'Holla my friend!!!', 
                 'Hey, may you have a good day!!',
                 "Hellew (sir/ma'am) 🤝",
                 '🙂',
                 '🙏',
                 "Somenone's looking hot today !!💋",
                 '👋',
                 "What's up!! dude 😎",
                 'kya haal hai!!!? Here have some milk 🥛',
                 'hey!! Beers on me 🍻',
                 "Finally the moon's out i guess"];
client.on('message',function(msg){

    console.log(msg.content);
    //for replies in specific channels
   // if(msg.channel.id === '790920590784593961'){

        if(msg.content === 'hi' || msg.content === 'hey' || msg.content === 'hello' || msg.content === 'Hey' || msg.content === 'Hi' || msg.content === 'Hello'){
            
            const index = Math.floor(Math.random() * replies.length);

            //if we wish to tag the person and reply
            // msg.reply('Namastey!!');

            //if we wish to leave user untagged    
            msg.channel.send(replies[index]);
        }
        else if(msg.content === '!gif'){
            console.log('!gif entered');
        }

    //}
    
   //msg.reply('Namastey!!!! 🙏 ');


})