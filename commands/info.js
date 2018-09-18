const Discord = require("discord.js");
const package = require("../package.json");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
      .setTitle("Bot Information")
    .setColor("#3a0be7")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Name", `${bot.user.username}`)
    .addField("Version", `${package.version}`)
    .addField("Running on", `${bot.guilds.size} servers`)
    .addField("Developed by", `<@306104099185623042>`)
    .addField("Created on", "Sunday, July 15th of 2018 / 22:21:54");
  message.channel.send(embed)
    }

module.exports.help = {
  name: "info"
}
  
