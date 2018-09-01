const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/fact`);

  let nekoembed = new Discord.RichEmbed()
  .setColor("#3a0be7")
  .setImage(body.url);

  message.channel.send(nekoembed);

}

module.exports.help = {
  name: "fact"
}
