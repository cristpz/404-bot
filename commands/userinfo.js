const Discord = module.require('discord.js');


module.exports.run = async (bot, message, args) => {
  const moment = require("moment");
require("moment-duration-format");
const status = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline/Invisible"
};
let user = message.mentions.users.first() || message.author;
  
  let userinfoembed = new Discord.RichEmbed()
    .setColor("#3a0be7")
    .setThumbnail(`${user.displayAvatarURL}`)
    .setAuthor(`${user.username} (${user.id})`)
    .addField("Bot?", user.bot, true)
    .addField("Discriminator", user.discriminator, true)
    .addField("Status", `${status[user.presence.status]}`, true)
    .addField("Playing", `${user.presence.game ? `${user.presence.game.name}` : "nothing currently."}`, true)
    .addField("Created At", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true);

  message.channel.send(userinfoembed);
}

module.exports.help = {
    name: "userinfo"
}
