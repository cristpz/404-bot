const Discord = require("discord.js");
const google = require("google");


module.exports.run = async (client, message, args) => {

    let google = args.slice(0).join('+');

        let link = `https://www.google.com/search?q=` + google;
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
	
    .setColor("#3a0be7")
    .setTimestamp()
	.addField("Searching for", `${args.slice(0).join(' ')}`)
	.addField('Link', `${link}`)
	.setFooter(`Requested By ${message.author}`, message.author.avatarURL);
          
	message.channel.send(embed);
	message.author.send(`You have searched for ${link} in ${ message.guild.name}`);
  
}

module.exports.help = {
  name: "google"
}
