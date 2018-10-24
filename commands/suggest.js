const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  await message.delete();
  let suggestion = args.slice(0).join(" ");
  if (!suggestion) return message.reply("Please enter a valid suggestion!");
  let guildID = "500244270373011466";
  let channelID = "504743305427550219"
bot.guilds.get(guildID).channels.get(channelID).send(suggestion + `by ${message.author.username} with ID ${message.author.id} at ${message.createdAt}`)
  message.reply("That suggestion has been saved, thank you!")

}

module.exports.help = {
  name: "suggest"
}
