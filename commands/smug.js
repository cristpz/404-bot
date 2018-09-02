const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/smug`);

  let smugembed = new Discord.RichEmbed()
  .setColor("#3a0be7")
  .setTitle(`${message.author.username} smugs`)
  .setImage(body.url);

  message.channel.send(smugembed);

}

module.exports.help = {
  name: "smug"
}
