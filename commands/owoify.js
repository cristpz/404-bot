const Discord = require("discord.js");
const client = require('nekos.life');
const neko = new client();



module.exports.run = async (bot, message, args) => {
 async function work() {
  let owo = await neko.getSFWOwOify({text: 'This is a text message'});
  console.log(owo);
  message.channel.send(owo);
}

work();
}

module.exports.help = {
  name: "owotest"
}
