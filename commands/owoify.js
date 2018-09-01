const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://nekos.life/api/v2/owoify`);

  let owoembed = new Discord.RichEmbed()
  .setColor("#3a0be7")
  .setImage(body.msg);

  message.channel.send(owoembed);

}

module.exports.help = {
  name: "owoify"
}
