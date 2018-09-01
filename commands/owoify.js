const Discord = require("discord.js");
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://nekos.life/api/v2/owoify`);
  
return message.channel.send(body.msg);

}

module.exports.help = {
  name: "owoify"
}
