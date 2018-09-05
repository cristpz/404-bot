exports.run = async (client, msg) => {
  if (!msg.guild.voiceConnection) { throw `I am not connected in a voice channel, please add some songs to the queue first with ${msg.guild.settings.prefix}queueadd`; }
  if (msg.guild.voiceConnection.dispatcher.paused) { return msg.send("The stream is already paused, baka!"); }

  msg.guild.voiceConnection.dispatcher.pause();
  return msg.send("⏸ The queue is now paused.");
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "pause",
  description: "Pauses the playlist.",
  usage: "",
  usageDelim: "",
  extendedHelp: "",
};
