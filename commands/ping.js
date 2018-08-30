const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            message.channel.send(new Date().getTime() - message.createdTimestamp + " ms currently.");
    }

module.exports.help = {
  name: "ping"
}
