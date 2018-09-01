const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/cuddle`);

  let cuddleembed = new Discord.RichEmbed()
  .setColor("#3a0be7")
  .setTitle(`${message.author.username} cuddled with ${message.mentions.members.first().user.username}`)
  .setImage(body.url);

  message.channel.send(cuddleembed);

}

module.exports.help = {
  name: "cuddle"
}
