const Discord = require("discord.js");
const google = require("google");


module.exports.run = async (client, message, args) => {
 let google = args.slice(1).join(" ");
    let link = `https://www.google.com/search?q=` + google;
	message.channel.send(link);
}

module.exports.help = {
  name: "google"
}
