const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //4048ball (question)
if(!args[0]) return message.reply("Please ask a full question.");
let replies = ["Yes.", "No."];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(0).join(" ");

let ynembed = new Discord.RichEmbed()
.setColor("3a0be7")
.addField("Answer", replies[result]);

return message.channel.send(ynembed);



}

module.exports.help = {
  name: "yn"
}
