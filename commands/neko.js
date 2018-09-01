const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://nekos.life/api/neko`);

  let catembed = new Discord.RichEmbed()
  .setColor("#3a0be7")
  .setTitle("Nya~!")
  .setImage(body.file);

  message.channel.send(catembed);

}

module.exports.help = {
  name: "neko"
}
