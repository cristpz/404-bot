const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
 if (!message.channel.nsfw) return message.channel.send(":warning: This channel is not marked as **NSFW**")
  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/bj`);

  let bjembed = new Discord.RichEmbed()
  .setColor("#3a0be7")
  .setTitle(`${message.author.username} sucked ${message.mentions.members.first().user.username}'s pp`)
  .setImage(body.url);

  message.channel.send(bjembed);

}

module.exports.help = {
  name: "bj"
}
