const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let youtube = args.slice(1).join('+');
    let link = `https://www.youtube.com/results?search_query=` + youtube;
	message.channel.send(link);

module.exports.help = {
  name: "youtube"
}
