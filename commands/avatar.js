const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setDescription(`**Hey look, it's ${message.author}'s avatar!**`)
  .setImage(message.author.avatarURL)
  .setColor('#3a0be7')
  message.channel.send(embed)
    }

module.exports.help = {
  name: "avatar"
}
