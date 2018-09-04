const Discord = require("discord.js");
let prefix = '404';

module.exports.run = async (bot, message, args) => {
            message.channel.send(new Date().getTime() - message.createdTimestamp + " ms currently.");
    }

module.exports.help = {
  name: "ping"
}
