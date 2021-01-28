const fetch = require("node-fetch");
//const env = require("../config/environment");

function isEmpty(str) {
    return (!str || 0 === str.length);
}

module.exports = async function(msg, str){
    console.log("*********!apod entered*********");
    let url = (false === isEmpty(str))?`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}&date=${str}` : `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}`;
    try{

    let response = await fetch(url);
    let json = await response.json();
    console.log(str);
        
        console.log("The url: ", url);
        msg.channel.send(json.date);
        msg.channel.send(json.url);
        msg.channel.send(`***${json.title}***`);
        msg.channel.send(json.explanation);
    }
    catch(err){
        console.log('*********Inavlid String Entered !!!!!*********',err)
    }
}
