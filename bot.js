console.log("Welcome to the singularity!!!😎 ")

const Discord = require('discord.js');
const client = new Discord.Client();

//temporarily here :) 
client.login('NzkwOTE2NjcwMDcxNTA0OTE2.X-HkjA.HF_BoP41BNzUVueVQGJZ0zgJKNk');

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

            msg.channel.send(replies[index]);
        }

    //}
    
   //msg.reply('Namastey!!!! 🙏 ');


})