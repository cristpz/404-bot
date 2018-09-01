const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setDescription(`Currently serving ${bot.users.size} users.`)
  message.channel.send(embed)
    }

module.exports.help = {
  name: "botusers"
}
