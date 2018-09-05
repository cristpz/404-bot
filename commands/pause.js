const discord = require("discord.js");

module.exports.run = async (client, msg) => {
  if (!msg.guild.voiceConnection) { throw `I am not connected in a voice channel, please add some songs to the queue first with ${msg.guild.settings.prefix}queueadd`; }
  if (msg.guild.voiceConnection.dispatcher.paused) { return msg.send("The queue is already paused."); }

  msg.guild.voiceConnection.dispatcher.pause();
  return msg.send("⏸ The queue is now paused.");
};

module.exports.help = {
    name: "pause",
};
