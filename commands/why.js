const Discord = require("discord.js");
const client = require('nekos.life');
const neko = new client();
const superagent = require("superagent");



module.exports.run = async (client, message, args) => {
  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/hug`);

  let hugembed = new Discord.RichEmbed()
  .setColor("#3a0be7")
  .setTitle(`${message.author} why though`)
  .setImage(r.body.text);

  message.channel.send(hugembed);

}

module.exports.help = {
  name: "why"
}
