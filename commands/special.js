const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let specialembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("3a0be7")
.setDescription("I am on twitter now!")
.setURL("https://twitter.com/CristPZ/status/1047828470166953984");

message.channel.send(specialembed);



}

module.exports.help = {
  name: "special"
}
