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

module.exports = (msg)=> {
const index = Math.floor(Math.random() * replies.length);

//if we wish to tag the person and reply
// msg.reply('Namastey!!');
//if we wish to leave user untagged    
msg.channel.send(replies[index]);
}