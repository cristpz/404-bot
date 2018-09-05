exports.run = async (client, msg) => {
  if (!msg.guild.voiceConnection) { throw "I am not connected in a voice channel, please add some songs to the queue first!"; }
  if (msg.guild.voiceConnection.dispatcher.paused === false) { return msg.send("The queue is not paused!"); }

  msg.guild.voiceConnection.dispatcher.resume();
  msg.send("▶ Now resuming your tunes.");
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: []
};

exports.help = {
  name: "resume",
  description: "Resumes the playlist.",
  usage: ""
};
