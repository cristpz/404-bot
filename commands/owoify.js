const Discord = require("discord.js");
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, message, args) => {
async function work() {
  let owo = await neko.getSFWOwOify({text: 'Hello!'});
  console.log(owo);
}

module.exports.help = {
  name: "hi"
}
