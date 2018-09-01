const discord = require("discord.js");
const superagent = require("snekfetch");


module.exports.run = async (client, message, args) => {
    if (args < 1) return message.reply(" :x: O.o you wanna hug yourself??");
    let stats = await client.getStats();
    stats.hug++;
    client.saveStats(stats);
    await client.snekfetch.get('https://nekos.life/api/hug')
        .set('Key', 'dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf')
        .then(r => message.channel.send(`${args} You got a hug from ${message.author.username} :heart:`,{
            embed: {
                color: client.getRandomColor(),
                image: {
                    url: r.body.url
                }
            }
        }).catch(e => console.warn('wew tf happened here ' + e)));

};

module.exports.help = {
  name: "neko"
}
