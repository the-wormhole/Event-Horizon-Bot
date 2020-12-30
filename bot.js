console.log("Welcome to the singularity!!!😎 ")

const fetch = require('node-fetch');
const Discord = require('discord.js');
//const $ = require('jquery');
const client = new Discord.Client();
const env = require('./config/environment.js');

//temporarily here :) 
client.login(env.token);

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
client.on('message',async function(msg){

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
           /* $.ajax({
                url: `https://api.tenor.com/v1/search?q=space&key=${env.gif_api_key}&contentfilter=off&limit=1`,
                method: 'GET',
                success: (data)=>{
                    msg.channel.send(data.results.url);
                    console.log(data.results.url);
                }
            })
            console.log("is this running");
            function loadXMLDoc() {
                var xmlhttp = new XMLHttpRequest();
            
                xmlhttp.onreadystatechange = function() {
                    console.log(xmlhttp.response);
                    if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                       if (xmlhttp.status == 200) {
                           document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
                       }
                       else if (xmlhttp.status == 400) {
                          alert('There was an error 400');
                       }
                       else {
                           alert('something else other than 200 was returned');
                       }
                    }
                };
            
                xmlhttp.open("GET", `https://api.tenor.com/v1/search?q=space&key=${env.gif_api_key}&contentfilter=off&limit=1`, true);
                xmlhttp.send();
               console.log(xmlhttp.responseText);
               msg.channel.send(data)
            }
        }*/
        let url = `https://api.tenor.com/v1/search?q=space&key=${env.gif_api_key}&limit=1`;
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        msg.channel.send(json.results[0].url);
    }
    
   //msg.reply('Namastey!!!! 🙏 ');


})