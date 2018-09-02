const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("#3a0be7")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)
    .addField("Server Owner", message.guild.owner)
    .addField("Server Region", message.guild.region);

    message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverinfo"
}
