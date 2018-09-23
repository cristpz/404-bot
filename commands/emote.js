const Discord = require("discord.js");

module.exports.run = (client, message, args, level) => {
  const emoji = client.emojis.get(args[0]);
 const emoteurl = emoji.url
  const emojiembed = new Discord.RichEmbed()
  // .setAuthor("Emote Info"," https://discordemoji.com/assets/emoji/owo.png")
  .addField("» Emote Name",emoji.name)
   .setThumbnail(emoteurl)
    .addField("» Emote Id",emoji.id)
    .addField("» Created At",emoji.createdAt)
   
if(isNaN(args[0])) return message.channel.send("Emote name must not be a number!")
  
  message.channel.send(emojiembed)

}

module.exports.help = {
   name: "emoji"
}
