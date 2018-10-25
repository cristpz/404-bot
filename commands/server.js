const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send(`
  `Server Invite Link:`
  https://discord.gg/tnPXsXw
  
  **First** `50` **members will get a** `special role` **after we hit** `100 members` **, cheers!**`);

}

module.exports.help = {
  name: "server"
}
