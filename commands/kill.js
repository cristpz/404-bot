const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.mentions.members.first().user.username === message.isMentioned(message.author) ) {

 const killEmbed = new Discord.RichEmbed()
 .setColor("3a0be7")
 .setTitle(`${message.author.username} killed ${message.mentions.members.first().user.username}, oof`)
 .setImage('https://static.comicvine.com/uploads/original/11111/111117956/5491496-vegeta+dies.gif')
 message.channel.send(killEmbed);
 }
   }

module.exports.help = {
  name: "kill"
}
