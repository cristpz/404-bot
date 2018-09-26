const Discord = require("discord.js");
const Fortnite = require("fortnite");
const ft = new Fortnite(botconfig.fortnite);

module.exports.run = async (bot, message, args) => {
  let username = args[0];
  let platform = args[1] "pc";

  let data = ft.getinfo(username, platform).then(data => {

    let stats = data.lifetimeStats;
    let kills = stats.find(s =>s.stat == 'kills');
    let wins = stats.find(s =>s.stat == 'wins');
    let kd = stats.find(s =>s.stat == 'kd');
    let mPlayed = stats.find(s =>s.stat == 'matchesPlayed');
    let tPlayed = stats.find(s =>s.stat == 'timePlayed');
    let asTime = stats.find(s =>s.stat == 'averageSurvivalTime');

    let embed = new Discord.RichEmbed()
    .setTitle("Fortnite Statistics")
    .setAuthor(data.username)
    .setColor("#3a0be7")
    .addField("Kills", kills.value, true)
    .addField("Wins", wins.value, true)
    .addField("K/D", kd.value, true)
    .addField("Matches Played", mPlayed.value, true)
    .addField("Time Played", tPlayed.value, true)
    .addField("Average Survival Time", asTime.value, true);

    message.channel.send(embed);


  }).catch(e => {
    console.log(e);
    message.channel.send("Couldn't find that user");
  });
}

module.exports.help = {
  name: "fortnite"
}
