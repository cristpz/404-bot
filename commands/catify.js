const Discord = require("discord.js");
const client = require('nekos.life');
const neko = new client();



module.exports.run = async (bot, message, args) => {

 neko.getSFWCatText().then((catText) => console.log(catText));

}

module.exports.help = {
  name: "catify"
}
