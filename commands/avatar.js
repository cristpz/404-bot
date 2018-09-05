const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let user = message.mentions.users.first() || message.author;
    
    let avatarembed = new Discord.RichEmbed()
    .setAuthor(`${user.username}`)
    .setImage(user.displayAvatarURL);
    
    message.channel.send(avatarembed);
}
  
module.exports.help = {
    name: "avatar"
}
