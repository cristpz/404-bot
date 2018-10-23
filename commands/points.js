const Discord = require('discord.js')
const mongoose = require("mongoose");
mongoose.connect("mongodb://404-bot-tw2dx.gcp.mongodb.net/404-bot.money", {
   useNewUrlParser: true
});
const Money = require("../models/money.js")

module.exports.run = async (bot, message, args) => {

  Money.findOne({
    userID: message.author.id,
    serverID: message.guild.id
  }, (err, money) => {
    if(err) console.log(err);

    let embed = new Discord.RichEmbed()
    .setColor("3a0be7")
    if(!money){
      embed.addField(`${message.author.username}'s Points`, "0", true);
      return message.channel.send(embed);
    } else {
      embed.addField(`${message.author.username}'s Points`, money.money, true);
      return message.channel.send(embed);
    }
  })
}

module.exports.help = {
  name: "points"
}
