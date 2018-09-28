const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const active = new Map();

module.exports.run = async (client, message, args, ops) => {

  if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel first.');
  
  if (message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot is already connected.');

  if (!args[0]) return message.channel.send('Sorry, I cannot play music if there are no arguments mentioned in this command.');

  let validate = await ytdl.validateURL(args[0]);

  let info = await ytdl.getInfo(args[0]);

  if (!validate) return message.channel.send('Please input a valid url.');
  
  let connection = await message.member.voiceChannel.join();
  
  let dispatcher = await connection.playStream(ytdl(args[0], { filter: 'audioonly' }));

  message.channel.send(`Now playing ${info.title}`);

}

module.exports.help = {
  name: "play"
}
