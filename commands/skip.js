exports.run = async (client, msg) => {
  if (!msg.guild.voiceConnection) { throw "I am not connected in a voice channel, please add some songs to the queue first!"; }
  if (msg.member.voiceConnection !== msg.guild.voiceConnection) { throw "You must be in the voice channel first!"; }

  msg.guild.voiceConnection.dispatcher.end();
  msg.send("⏭ Skipped the current song.");
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: []
};

exports.help = {
  name: "skip",
  description: "Skips the current song.",
  usage: ""
};
