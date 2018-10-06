const Discord = module.require('discord.js');
const moment = require("moment");
require("moment-duration-format");
const status = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline/Invisible"
};

module.exports.run = async (bot, message, args) => {
let user = message.mentions.users.first() || message.author;
  
  let userinfoembed = new Discord.RichEmbed()
    .setColor("#3a0be7")
    .setThumbnail(`${user.displayAvatarURL}`)
    .setAuthor(`${user.user.tag} (${user.id})`, `${user.user.avatarURL}`)
    .addField("Nickname:", `${user.nickname !== null ? `Nickname: ${user.nickname}` : "No nickname"}`, true)
    .addField("Status", `${status[user.user.presence.status]}`, true)
    .addField("Playing", `${user.user.presence.game ? `${user.user.presence.game.name}` : "nothing currently."}`, true)
    .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
    .addField("Joined At", `${moment.utc(user.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .addField("Created At", `${moment.utc(user.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true);

  message.channel.send(userinfoembed);
}

module.exports.help = {
    name: "userinfo"
}
