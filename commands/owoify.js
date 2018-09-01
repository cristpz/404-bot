const Discord = require("discord.js");
const superagent = require("snekfetch");

module.exports.run = async (bot, message, args) => {
  async run(message, [text]) {
let owoified = text.replace(/r|l/g, "w").replace(/R|L/g, "W").replace(/owo/i, 'OwO').replace(/uwu/i, 'UwU');
        let embed = new MessageEmbed()
        .setColor('#3a0be7')
        .addField('OwOified', owoified)
        .addField('Original', text)
        .setFooter(`Requested by: ${message.author.tag}`)
        
return message.send(embed);

}

module.exports.help = {
  name: "owoify"
}
