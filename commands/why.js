const Discord = require("discord.js");
const client = require('nekos.life');
const neko = new client();
const superagent = require("snekfetch");



module.exports.run = async (client, message, args) => {
    let stats = await client.getStats();
    stats.why++;
    client.saveStats(stats);
    await client.snekfetch.get('https://nekos.life/api/why')
        .then(r => message.channel.send({
            embed: {
                color: client.getRandomColor(),
                author: {
                    name: "Just why...",
                    icon_url: client.user.avatarURL
                },fields: [
                    {
                        name: message.author.username + "Asks ",
                        value: r.body.why
                    }]
            }
        }).catch(e => console.warn('oh no ' + e)));

}

module.exports.help = {
  name: "why"
}
