const discord = require("discord.js");

module.exports.run = async (client, msg) => {
  if (!msg.guild.voiceConnection) { throw "I am not connected in a voice channel, please add some songs to the queue first!"; }
  if (msg.guild.voiceConnection.dispatcher.paused === false) { return msg.send("The queue is not paused!"); }

  msg.guild.voiceConnection.dispatcher.resume();
  msg.send("▶ Now resuming your tunes.");
};

module.exports.help = {
    name: "resume",
};
