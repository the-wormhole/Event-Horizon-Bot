const hello = require('./commands/hello');
const space = require('./commands/space');

const commands = { hello , space};          // enhanced javascript object form

module.exports = async function(msg){

console.log(msg.content);
//for replies in specific channels
// if(msg.channel.id === '790920590784593961'){

if(msg.content === 'hi' || msg.content === 'hey' || msg.content === 'hello' || msg.content === 'Hey' || msg.content === 'Hi' || msg.content === 'Hello'){
    commands['hello'](msg);
}


const token = msg.content;
if(token.charAt(0) === "!"){
let command = token.split("!");
command.shift();
commands[command](msg);
}
//msg.reply('Namastey!!!! 🙏 ');


}