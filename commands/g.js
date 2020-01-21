const Discord = require('discord.js');
module.exports.run = (client, message) => {

let args = message.content.split(' ')
   		args.shift ()
   		message.channel.send ("Вот результат вашего поиска: https://www.google.fr/#q=" +args.join('%20'))
         console.log(`${message.author.username} | google `)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'google',
    description: 'Faîte n\'importe qu\'elle recherche google facilement et rapidement',
    usage: 'google <recherche>'
  };