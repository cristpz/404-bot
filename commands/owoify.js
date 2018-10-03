const Discord = require("discord.js");
const client = require('nekos.life');
const neko = new client();
const superagent = require("snekfetch");



module.exports.run = async (bot, message, args) => {
    let stats = await client.getStats();
    stats.why++;
    client.saveStats(stats);
    await client.snekfetch.get('https://nekos.life/api/v2/owoify')
        .then(r => message.channel.send({
            embed: {
                color: 0x3a0be7,
                author: {
                    name: "owo",
                    icon_url: client.user.avatarURL
                },fields: [
                    {
                        name: message.author.username + "owo ",
                        value: r.body.owoify
                    }]
            }
        }).catch(e => console.warn('damn that is fucked up ' + e)));

 
}

module.exports.help = {
  name: "owoify"
}
