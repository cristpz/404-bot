const discord = require("discord.js");
const superagent = require("snekfetch");


module.exports.run = async (client, message, args, level) => {
    superagent.get('https://nekos.life/api/neko')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setDescription("Nya~!")
      .setImage(response.body.url)
      .setColor("#3a0be7")
  message.channel.send(lewdembed);
    })
}

    module.exports.help = {
      name: "neko"
}
