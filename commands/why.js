const Discord = require("discord.js");
const client = require('nekos.life');
const superagent = require("superagent");



module.exports.run = async (client, message, args) => {
  let {body} = await superagent
  .get(`https://nekos.life/api/v2/why`);

  let whyembed = new Discord.RichEmbed()
  .setColor("#3a0be7")
  .addField(`${message.author} why though`, body.text);

  message.channel.send(whyembed);

}

module.exports.help = {
  name: "why"
}
