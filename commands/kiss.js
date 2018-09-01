
const discord = require("discord.js");
const superagent = require("snekfetch");
const randomkiss = ['https://vignette.wikia.nocookie.net/yuruyuri/images/1/18/Kiss.gif/revision/latest?cb=20151120222036',
'https://i.gifer.com/B82h.gif',
'http://gifs.51gif.com/20161202/2f2e307c08b1466a87d5c79aee1e9d2f.gif',
'https://i.pinimg.com/originals/7a/8a/77/7a8a7774ea5d7a51a4bf045679270c40.gif',
'https://steamusercontent-a.akamaihd.net/ugc/315622114450215507/8FE230F0F5B221429C31D1F1210432E5822BCE7C/',
'https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif',
'https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865',
'https://i.pinimg.com/originals/29/65/3a/29653ad6e372605c4c43c3c015f9e499.gif',
'https://i.imgur.com/eisk88U.gif',
'https://i.imgur.com/eKcWCgS.gif',
'https://i.imgur.com/4Ad9iwh.gif',
'https://lifeo.ru/wp-content/uploads/gif-anime-kisses-13.gif',
'https://i.kym-cdn.com/photos/images/original/001/108/304/adf.gif',
'https://vignette.wikia.nocookie.net/citrus/images/f/fd/Citrus_first_kiss.gif/revision/latest?cb=20180304213636',
'https://78.media.tumblr.com/090a17b85a7b6a35dea80a6e62550e5f/tumblr_mo5jwhNuYn1s4dyyio1_500.gif',
'http://gifimage.net/wp-content/uploads/2017/09/anime-forehead-kiss-gif-10.gif',
'http://www.lovethisgif.com/uploaded_images/41239-Anime-Cheek-Kiss-Gif-Karen-Kissing-Shino-lewd-.gif',
'https://data.whicdn.com/images/133862688/original.gif',
'https://78.media.tumblr.com/tumblr_m7x4176tyH1ro4cfco1_500.gif',
'https://vignette.wikia.nocookie.net/central/images/2/26/Kiss-anime.gif/revision/latest?cb=20140412150834',
'https://78.media.tumblr.com/f65b702f05f4f33e1c2035af7c5fed6a/tumblr_mswj8x1bjk1qiv7feo1_500.gif',
'https://media1.tenor.com/images/621ceac89636fc46ecaf81824f9fee0e/tenor.gif?itemid=4958649',
'https://i.pinimg.com/originals/86/d4/a0/86d4a046c8a32a28341353fc95bedc82.gif',
'https://i.pinimg.com/originals/b6/58/93/b65893e0a0aec5b35fd5f7a6cfc423a5.gif',
'https://78.media.tumblr.com/befc3f8aa8e0de74004d314397799fac/tumblr_og2ac38IqO1u7esouo1_500.gif',
'https://lh3.googleusercontent.com/-henxtOpqbdo/VoCwmuWcs1I/AAAAAAAAVno/DnOgbPH-8Eg/w506-h285/kisscheek.gif',
'https://78.media.tumblr.com/301ae2d7f59f33f9272846916fa2e16d/tumblr_oxibrsJa1l1t87n9ho1_500.gif',
'https://image.myanimelist.net/ui/7TVWLJ4cRvwHjFyWCI7sZ9_NpErgeq_lXTzj-RJNyqR0AJGCzWBTw6-ecJv305BagWdPHUPa_PyWKALXnlU_FlFHW6at_HGoMcnjrUWgdEdAPMz1tbKLL23ripKZLcfE',
'https://i.imgur.com/JOtxMGW.gif',
'https://68.media.tumblr.com/2bbeb57901f4a62bc8bc268d8122db9a/tumblr_okry1lbeWq1qcsnnso1_540.gif',
'https://thumbs.gfycat.com/PeriodicLastingFoal-size_restricted.gif',
'https://img.fireden.net/a/image/1456/68/1456684256992.gif',
'https://data.whicdn.com/images/263429690/original.gif',
'https://data.whicdn.com/images/295556310/original.gif',
'https://pa1.narvii.com/6224/c31c59491a5e6db1dfaff242b1a2f8d542c05563_hq.gif',
]

module.exports.run = async (client, message, args, level) => {
 if(!message.mentions.members.first().user.username === message.isMentioned(message.author) ) {
message.channel.send(`**${message.author.username}** kissed **${message.mentions.members.first().user.username}**`, {
    file: randomkiss[Math.floor(Math.random() * randomkiss.length)]
  });
 }
}

module.exports.help = {
  name: "kiss"
}
