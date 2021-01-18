const hello = require('./commands/hello');
const space = require('./commands/space');
const apod = require('./commands/apod');

const commands = { hello , space , apod};          // enhanced javascript object form

module.exports = async function(msg){

console.log(msg.content);
//for replies in specific channels
// if(msg.channel.id === '790920590784593961'){

if(msg.content === 'hi' || msg.content === 'hey' || msg.content === 'hello' || msg.content === 'Hey' || msg.content === 'Hi' || msg.content === 'Hello'){
    commands['hello'](msg);
}


const token = msg.content;
if(token.charAt(0) === "!"){
const command = token.split("!"); 
command.shift();                        // exclamation removed 
let call = command[0].split(" ");       // the query after command seperated
commands[call[0]](msg,call[1]);
}
//msg.reply('Namastey!!!! 🙏 ');


}