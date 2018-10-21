const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //404ppsize
let replies = [` non existent!`, ` an inch long!`, ` 2 inches long!`, ` 3 inches long!`, ` 4 inches long!`, ` 5 inches long!`, ` 6 inches long!`, ` 7 inches long!`, ` 8 inches long!`,
 ` 9 inches long!`, ` 10 inches long!`, ` 11 inches long, owo`, ` 12 inches long, OWO`, ` too long >~<`];

let result = Math.floor((Math.random() * replies.length));

let ppembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("3a0be7")
.addField(`${message.author.username}'s pp size`, replies[result])

message.channel.send(ppembed);



}

module.exports.help = {
  name: "ppsize"
}
