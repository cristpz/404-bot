const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
 let result = Math.floor((Math.random() * 100) + 0);

   const happyrate = new Discord.RichEmbed()
 .setDescription(`${result}/100, ❤`)
 .setColor("#3a0be7")
if (result > 90) return message.channel.send(happyrate);

}

module.exports.help = {
  name: "chuckle"
}
