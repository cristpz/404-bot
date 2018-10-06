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
    .addField("Nickname:", `${user.displayName !== null ? `${user.displayName}` : "No nickname"}`, true)
    .addField("Status", `${status[user.presence.status]}`, true)
    .addField("Playing", `${user.presence.game ? `${user.presence.game.name}` : "nothing currently."}`, true)
    .addField("Joined At", `${moment.utc(user.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .addField("Created At", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true);

  message.channel.send(userinfoembed);
}

module.exports.help = {
    name: "userinfo"
}
