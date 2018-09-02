const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, msg, args) => {
    if (!msg.guild.available) {
        try{await msg.channel.send('Discord API Error');}catch(e) {logger.error(e)}
        return;
    }
    let guild = msg.guild;
    let name = guild.name;
    let createdAt = moment(guild.createdAt).format('MMMM Do YYYY, h:mm:ss a');
    let channels = guild.channels.size;
    let owner = guild.owner.user.tag;
    let memberCount = guild.memberCount;
    let large = guild.large;
    let iconUrl = guild.iconURL;
    let region = guild.region;
    let afk = msg.guild.channels.get(guild.afkChannelID) === undefined ? 'None' : msg.guild.channels.get(guild.afkChannelID).name;

    const embed = new Discord.RichEmbed()
        .setTitle('Guild Information')
        .addField('Channels', `**Channel Count:** ${channels}\n**AFK Channel:** ${afk}`, true)
        .addField('Members', `**Member Count:** ${memberCount}\n**Owner:** ${owner}\n**Owner ID:** ${guild.owner.id}`, true)
        .addField('More', `**Created at:** ${createdAt}\n**Large Guild?:** ${large ? 'Yes' : 'No'}\n**Region:** ${region}`)
        .setThumbnail(iconUrl)

    try{await msg.channel.send({embed});}catch(e){logger.error(e)}
};

module.exports.help = {
 name: serverinfo
}
