const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //404coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setColor("#3a0be7")
  .addField("💸", uCoins);

  message.channel.send(coinEmbed);
}

module.exports.help = {
  name: "coins"
}
