const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  
message.channel.send(`
I have a website now! :wave:
https://cristpz-404.herokuapp.com/

(Repository: https://github.com/cristpz/404-site)`);
}
module.exports.help = {
  name: "website"
}
