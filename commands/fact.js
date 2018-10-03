const Discord = require("discord.js");
const superagent = require("superagent");



module.exports.run = async (client, message, args) => {
  let {body} = await superagent
  .get(`https://nekos.life/api/v2/fact`);

  let factembed = new Discord.RichEmbed()
  .setColor("#3a0be7")
  .setTitle(`Random Fact:`)
  .setDescription(body.why);
  message.channel.send(factembed);

}

module.exports.help = {
  name: "fact"
}
