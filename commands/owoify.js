const Discord = require("discord.js");
const client = require('nekos.life');
const neko = new client();



module.exports.run = async (bot, message, args) => {
 
 let {body} = await superagent
  .get(`https://nekos.life/api/v2/owoify`);

  let owoembed = new Discord.RichEmbed()
  .setColor("#3a0be7")
  .setTitle(body.text)

  message.channel.send(owoembed);

 
}

module.exports.help = {
  name: "owoify"
}
