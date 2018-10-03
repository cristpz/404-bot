const Discord = require("discord.js");
const client = require('nekos.life');
const neko = new client();

neko.getSFWCatText().then((catText) => console.log(catText));

module.exports.run = async (bot, message, args) => {

 neko.getSFWCatText().then((catText) => message.channel.send(catText));

}

module.exports.help = {
  name: "catify"
}
