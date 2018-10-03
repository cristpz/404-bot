const Discord = require("discord.js");
const client = require('nekos.life');
const neko = new client();



module.exports.run = async (bot, message, args) => {
 
 let catText = neko.getSFWCatText();

 neko.getSFWCatText().then((catText) => console.log(catText));
 
 message.channel.send(catText);

}

module.exports.help = {
  name: "cattext"
}
