const Discord = require("discord.js");
const superagent = require("superagent");



module.exports.run = async (client, message, args) => {
 let text = args.slice(1).join(" ");
 let owoified = text.replace(/r|l/g, "w").replace(/R|L/g, "W").replace(/owo/i, 'OwO').replace(/uwu/i, 'UwU');
        let owoembed = new Discord.RichEmbed()
        .setColor('#3a0be7')
        .addField('OwOified Text', owoified);
        message.channel.send(owoembed);
}

module.exports.help = {
  name: "owoify"
}
