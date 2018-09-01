const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {
    if (!message.channel.nsfw) return message.channel.send(":warning: This channel is not marked as **NSFW**")
    superagent.get('https://nekos.life/api/v2/img/hololewd')
        .end((err, response) => {
      const holoembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor("#3a0be7")
  message.channel.send(holoembed);
    })
}

    module.exports.help = {
      name: "lewdholo"
}
