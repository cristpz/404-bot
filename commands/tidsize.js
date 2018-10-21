const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //404tidsize
let replies = [` it's a loli, take cover!`, ` a cups, cute!`, ` b cups, uwu!`, ` c cups, aaaaa!`, ` d cups, mommy pls no...`, ` dd cups, mommy A`, ` dd+ cups, PAPA HELP`];

let result = Math.floor((Math.random() * replies.length));

let tiddyembed = new Discord.RichEmbed()
.setColor("3a0be7")
.addField(`${message.author.username}'s tiddy size`, replies[result])

message.channel.send(tiddyembed);



}

module.exports.help = {
  name: "tidsize"
}
