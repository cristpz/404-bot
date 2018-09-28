const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
  if (!message.member.voiceChannel) return message.channel.send('PLease connect to a voice channel first.');

  if (!message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot is not connected to the guild.');

  if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Sorry, you are not connected to the same voice channel.');

  message.guild.me.voiceChannel.leave();

  message.channel.send('Leaving Channel...');

}

module.exports.help = {
  name: "leave"
}
