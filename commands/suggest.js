const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  await message.delete();
  let suggestion = args.slice(0).join(" ");
  if (!suggestion) return message.reply("Please enter a valid suggestion!");
  let channelID = "504743305427550219";
  let suggestembed = new Discord.RichEmbed
  .setAuthor(message.author.username)
  .addField("With ID", message.author.id)
  .addField("Time/Date", message.createdAt)
  .setColor("3a0be7");
client.channels.get(channelID).send(suggestembed);
  
//  message.reply("That suggestion has been saved, thank you!");

}

module.exports.help = {
  name: "suggest"
}
