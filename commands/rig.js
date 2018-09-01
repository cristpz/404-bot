const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
let m421 = args.join(" ");
 if (!m421) return message.channel.send('Please define a name.')
 if (m421.length > 30) return message.channel.send(`I can't rate your waifu! It's over 30 characters!`)
 let result = Math.floor((Math.random() * 100) + 0);

   const happyrate = new Discord.RichEmbed()
 .setDescription(`I would rate **${m421}** ${result}/100 ❤`)
 .setColor("#3a0be7")
 return message.channel.send(happyrate);
 
}

module.exports.help = {
  name: "ratewaifu chuckle"
}
