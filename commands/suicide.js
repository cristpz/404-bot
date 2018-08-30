const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const suicideEmbed = new Discord.RichEmbed()
   .setColor("#3a0be7")
   .setTitle(`${message.author.username} commited suicide 😦`)
   .setImage('https://thumbs.gfycat.com/EquatorialGleefulArabianhorse-size_restricted.gif')
   message.channel.send(suicideEmbed);

   }

module.exports.help = {
  name: "suicide"
}
