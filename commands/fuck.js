const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/anal`);

  let fuckembed = new Discord.RichEmbed()
  .setColor("#3a0be7")
  .setTitle(`${message.author.username} fucked ${message.mentions.members.first().user.username}`)
  .setImage(body.url);

  message.channel.send(fuckembed);

}

module.exports.help = {
  name: "fuck"
}
