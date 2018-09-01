const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/spank`);

  let spankembed = new Discord.RichEmbed()
  .setColor("#3a0be7")
  .setTitle(`${message.author.username} spanked ${message.mentions.members.first().user.username}`)
  .setImage(body.url);

  message.channel.send(spankembed);

}

module.exports.help = {
  name: "spank"
}
