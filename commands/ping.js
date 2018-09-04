const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let prefix = '404';
            message.channel.send(new Date().getTime() - message.createdTimestamp + " ms currently.");
    }

module.exports.help = {
  name: "ping"
}
