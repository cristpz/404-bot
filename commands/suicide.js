const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const suicideEmbed = new Discord.RichEmbed()
   .setColor("#3a0be7")
   .setTitle(`${message.author.username}, you should definitely try one of those, you might change your mind~!`)
   .setImage('https://i.kym-cdn.com/photos/images/original/001/260/891/d86.gif')
   message.channel.send(suicideEmbed);

   }

module.exports.help = {
  name: "suicide"
}
