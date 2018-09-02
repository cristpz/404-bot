const Discord = require("discord.js");

//404coinflip
module.exports.run = async (bot, message, args) => {
  let heads = 1;
  let tails = 0;

  let result = Math.floor(Math.random() * 2); //Randomely selects Heads or Tails

  if (result == 0)
    let tailsembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("#3a0be7")
.setTitle('Tails');
    return message.channel.send(tailsembed);
  else if (result == 1) 
    let headsembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("#3a0be7")
.setTitle('Heads');
  return message.channel.send(headsembed);
  else {
    return message.channel.send(
      "Error Occurred, Flip again.\n\n **If this problem keeps arising, make sure you've joined my support server to report any issues with the bot**"
    ); 
  }
};

module.exports.help = {
  name: "coinflip"
};
