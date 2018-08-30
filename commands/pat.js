const discord = require("discord.js");
const superagent = require("snekfetch");
const randompat = ['https://i.pinimg.com/originals/a0/6d/65/a06d65ad49f019aaae3f30fb872df619.gif',
'https://archive-media-0.nyafuu.org/c/image/1483/55/1483553008493.gif',
'https://i.pinimg.com/originals/8b/42/6c/8b426c9bedc37054cd7e73925fa10da5.gif',
'https://78.media.tumblr.com/f95f14437809dfec8057b2bd525e6b4a/tumblr_omvkl2SzeK1ql0375o1_500.gif',
'http://cloud-3.steamusercontent.com/ugc/93852834496370454/39194370AA7AC1056892B7F839643B24901F22BB/',
'https://pa1.narvii.com/6625/e4444261c20ffce57d8168a8496bfe90e5ca362a_hq.gif',
'https://archive-media-0.nyafuu.org/bant/image/1512/39/1512395039994.gif',
'https://i.pinimg.com/originals/06/6d/57/066d573fa2b6876f2e8dbf36b68fa061.gif',
'https://vignette.wikia.nocookie.net/acchikocchi/images/7/7c/Tumblr_nrtze7wEz41tlazn5o2_500.gif/revision/latest?cb=20160525144718',
]

module.exports.run = async (client, message, args, level) => {
 if(!message.mentions.members.first().user.username === message.isMentioned(message.author) ) {
message.channel.send(`${message.author} patted ${message.mentions.members.first().user.username}`, {
    file: randompat[Math.floor(Math.random() * randompat.length)]
  });
 }
}

module.exports.help = {
  name: "pat"
}
