const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/lizard`);

  let lizardembed = new Discord.RichEmbed()
  .setColor("#3a0be7")
  .setImage(body.url);

  message.channel.send(lizardembed);

}

module.exports.help = {
  name: "lizard"
}
