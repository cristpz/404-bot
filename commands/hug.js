const discord = require("discord.js");
const superagent = require("snekfetch");
const randomhug = ['https://media1.tenor.com/images/49a21e182fcdfb3e96cc9d9421f8ee3f/tenor.gif?itemid=3532079',
'https://media.giphy.com/media/g4Q8GDDIdBnlC/giphy.gif',
'https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif',
'https://78.media.tumblr.com/680b69563aceba3df48b4483d007bce3/tumblr_mxre7hEX4h1sc1kfto1_500.gif',
'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif',
'https://media1.tenor.com/images/506aa95bbb0a71351bcaa753eaa2a45c/tenor.gif?itemid=7552075',
'https://i.gifer.com/Y4Pm.gif',
'http://gifimage.net/wp-content/uploads/2017/10/hugging-anime-gif-1.gif',
'https://i.imgur.com/pME21N2.gif',
'https://pa1.narvii.com/5925/bfd5fdfa6132c17a1c768a88536afb0589f7aeb6_hq.gif',
'https://media.giphy.com/media/wnsgren9NtITS/giphy.gif',
'https://media.tenor.com/images/ac5a0c47918dece5e69c1cc9fbb416a9/tenor.gif',
'https://i.gifer.com/CDtQ.gif',         
]

module.exports.run = async (client, message, args, level) => {
 if(!message.mentions.members.first().user.username === message.isMentioned(message.author) ) {
message.channel.send(`**${message.author.username}** hugged **${message.mentions.members.first().user.username}**`, {
    file: randomhug[Math.floor(Math.random() * randomhug.length)]
  });
 }
}

module.exports.help = {
  name: "hug"
}
