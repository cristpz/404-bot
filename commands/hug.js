const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {
     if(!message.mentions.members.first().user.username === message.isMentioned(message.author) ) {
    superagent.get('https://nekos.life/api/v2/img/hug')
        .end((err, response) => {
      const hugEmbed = new Discord.RichEmbed()
      .setDescription(`${message.author.username} hugged ${message.mentions.members.first().user.username}`)
      .setImage(response.body.url)
      .setColor("#3a0be7")
  message.channel.send(hugEmbed);
    })
}

    module.exports.help = {
      name: "hug"
