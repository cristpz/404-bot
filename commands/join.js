const discord = require("discord.js");

module.exports.run = async (client, message) => {
  const voiceChannel = message.member.voiceChannel;
  if (!message.member.voiceChannel) { return message.channel.send("You are not in a voice channel..."); }

  const permissions = message.member.voiceChannel.permissionsFor(message.guild.me);
  if (permissions.has("CONNECT") === false) { return message.channel.send("I don't have the Connect permission."); }
  if (permissions.has("SPEAK") === false) { return message.channel.send("I can't speak in the channel."); }

  message.member.voiceChannel.join();
  return message.channel.send(`Now tuned into: ${message.member.voiceChannel}. Ready and awaiting orders!`);
};

module.exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

module.exports.help = {
  name: "join",
  description: "Joins the VC that you are in.",
  usage: "",
  usageDelim: "",
};
