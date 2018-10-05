const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let memberInfo = message.mentions.members.first();

  if(!memberInfo){
    var userinf = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor(0x3a0be7)
        .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID:", message.author.id)
        .addField("Joined at:", message.member.joinedAt)
        .addField("Created at:", message.author.createdAt);

        message.channel.send(userinf);

  }else{

    var userinfo = new Discord.RichEmbed()
        .setThumbnail(memberInfo.user.avatarURL)
        .setColor(0x3a0be7)
        .addField("Full Username:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
        .addField("ID:", memberInfo.id)
        .addField("Joined at", message.memberInfo.joinedAt)
        .addField("Created at:", memberInfo.user.createdAt);

        message.channel.send(userinfo);
  }
}

module.exports.help = {
    name: "userinfo"
}
