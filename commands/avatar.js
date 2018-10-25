const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let user = message.mentions.users.first() || message.author;
    
    let avatarembed = new Discord.RichEmbed()
    .setAuthor(`${user.username}`)
    .setColor("#3a0be7")
    .setImage(user.displayAvatarURL + `?size=1024`);
    
    message.channel.send(avatarembed);
}
  
module.exports.help = {
    name: "avatar"
}
