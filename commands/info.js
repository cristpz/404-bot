const Discord = require("discord.js");
const package = require("../package.json");

module.exports.run = async (bot, message, args) => {
  let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("#3a0be7")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Name", `[${bot.user.username}](https://discordbots.org/bot/468180436032421898)`)
    .addField("Version", `${package.version}`)
    .addField("Running on", `${bot.guilds.size} servers`)
    .addField("Developed by", `<@306104099185623042>`)
    .addField("Created on", bot.user.createdAt);
  message.channel.send(botembed); 

module.exports.help = {
  name: "info"
}
