const discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message) => {
  if (!message.guild.voiceConnection) { return message.channel.send("But I'm not in a voice channel..."); }

  const handler = client.queue.get(message.guild.id);
  if (!handler || handler.playing === false) { return message.channel.send(`I'm not playing any music right now! Add some by using ${message.guild.settings.prefix}queueadd`); }

  let song = handler.songs[0];
  const embed = new client.methods.Embed()
  .setColor("#3a0be7")
  .setTimestamp()
  .setTitle(`📻 __${message.guild.name}'s Music Stream__`)
  .setDescription("*Currently Playing*")
  .setThumbnail(song.image)
  .addField("**Title:**", `[${song.title}](${song.url})`)
  .addField("**Requested by:**", song.requester, true)
  .addField("**Time Left:**", `${moment.duration((handler.songs[0].seconds * 1000) - message.guild.voiceConnection.dispatcher.time).format("h:mm:ss", { trim: false })} out of ` + moment.duration(handler.songs[0].seconds * 1000).format("h:mm:ss", { trim: false }), true);

  message.channel.send({embed});
};

module.exports.help = {
    name: "nowplaying",
};
