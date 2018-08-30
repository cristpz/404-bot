const discord = require("discord.js");
const superagent = require("snekfetch");
const randomfuck = ['https://images.sex.com/images/pinporn/2014/12/16/620/9561691.gif',
'https://78.media.tumblr.com/tumblr_mabaq9SktY1rdw7hvo1_500.gif',
'https://the-sex.me/wp-content/uploads/2013/09/hentai-sex-filmspics-and-games-anal-fucking-a-little-hentai-girl-gif-1380563499g4n8k.gif',
'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiwsMi--JXdAhWPzKQKHXy7BHwQjRx6BAgBEAU&url=http%3A%2F%2Fkatariteharem.tumblr.com%2Fpost%2F154621706699%2Fahegao-hentai-tan-lines-request-gif-source&psig=AOvVaw2UlsyHetwTczfTqD_ngRNR&ust=1535754079387218',
'https://78.media.tumblr.com/3b5a321bb72d0f69993a5f7c84148c96/tumblr_n0pupd2sZN1sjyos5o1_500.gif',
'http://hentai.bestsexphotos.eu/wp-content/uploads/2017/04/tumblr_ogezhrq9kU1vpe4noo1_500.gif',
'http://eprworkshop.info/albums/userpics/2015y/04/05/20/1/9604-hentai-school-sex.gif',
'https://sozosblog.com/images/71eb444b9f4c6009b4c1650af7ff8313.jpg',
'https://cdn.discordapp.com/attachments/453668198231965706/484282853304172554/792508_01CG58E8Z8C0RFGNXN3ANRXC07.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/482579610215645185/lusciousnet_lusciousnet_00bgif_width500_height56447_sizekb46_1453292693.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/482564714220486686/hentai-gifs-00131_1609592929.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/481131998878892034/lusciousnet_lusciousnet_tumblr_ocbpbi25r21s1rvwio1_1280_445718938.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/481131813083938817/oa617ujcsu1ryn7v4o2.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/481131774194221071/tumblr_mf4ak5kctv1s0yj0ro1.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/481131753713696779/test.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/481131540303052812/tumblr_nw6hrkyexd1toy0ydo1.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/481130670958051341/tumblr_nqbmx9jxu71tv5c1wo1.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/476619059421642754/lusciousnet_0d3719b550304c35841f420_519253945.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/476618963703300116/lusciousnet_favorite-gif-6_1714629167.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/473951001641222167/leftthenutshangingout.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/473950975837732894/gif-4_01C59ZMMNHX8HABHDHT11TZBPH.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/473950963313410048/gif-5_01C5BBMRQP8WG54YA8YXHZPRQP.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/473950942375444480/f6ce16c797e3ecc53e2d3c3_1133141907.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/473950922951753730/356331295b958354e65cd22_1492483162.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/473950900600438784/52b9e6a342d018dd992a942_1314876311.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/473950888415723540/c363e22b2d9eb1fa207b6aa_1348478794.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/473950841854885903/6610bee77f3cbd966ceb158_377817641.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/470696417984512021/e2bd82edf517888e2e892b1_1610387766.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/470696257891860520/f876c98178a67297dc21cd3_1569811782.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/470696136508702740/lusciousnet_fc1f334e229161565073b28_150161959.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/470695859798016053/gif-68_01C4MGTMY28NE2FH0B2NPCPYGW.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/470695826633523209/tumblr_nhnwygh1yv1toy0ydo1_500_01C41MP7678YDN3KDYY6VJQZRH.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/470695779082829824/hentai-gifs-00413_1485077737.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/470695762661998593/3476ef6a660a12c72f0fae0_1568411078.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/468461777643110410/10_honoonoharamaseoppaieroappligakuen_episode1_eroan_01CAC4B68C2PGTT9X2Y7W3XYM7.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/466088778046504960/luscious_net_tumblr_oevswajgol1v2hfg0o8_540_1497967400.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/466715971818749991/tumblr_oi4pmdkxfg1vlz2vpo1_540_01B5V8D23AT5GYFH8884MR6C9Z.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/466715876767563826/tumblr_og5aywexga1vg2lyko8_500_01B5V7AVKC64A94B1JE8SYTRWG.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/466715850318282774/luscious_net_906831c361bacb185389c748afa51d56_1756703687.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/466088917138014218/tumblr_oio33hxyk21v2hfg0o1_540_01B5V8H2X7Z7JGW9ND6QJJXYED.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/466088841892331520/tumblr_ojekad11ta1toy0ydo1_540_01B7G2TPQ4G7EXF1W9KFGA689H.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/466088628846592010/luscious_net_1473563640597_1209532877.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/466088461049528323/luscious_net_tumblr_of7n8obqdm1v2hfg0o9_540_1518185017.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/466088487586758660/luscious_net_tumblr_oeepmbbbfv1vpe4noo1_540_1641886317.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/466088510122622981/tumblr_ohtzd7ymqn1uql0f0o1_540_01B7G2GWPHPJPKJCPE2KFV6WJA.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/465935811754459146/2124466589162785.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/465935724315803649/up-and-down_1147696684.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/465935389904076815/tumblr_oj77li2wzd1v2hfg0o2_540_01B7G2T1WVD4G8EM63GDG1GGT6.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/465598188552847370/luscious_net_cowgirl_position_wwwcrusangnet_177_1405353761.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/463798948499292177/oppai-squad-28_01CABPJY0XA37CKHXCD44SN33W.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/463798843461599254/tamashiiinsert-episode2-eroanime-omake-8_01CA6JYX6VCKY6M4F2JR37GRFD.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/462677178472202240/248747_847762946.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/462677248235929611/gif-2_01C4MG0S4KHGT7VTS0E8YH47NJ.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/462677110641655814/lusciousnet_hentai-gifs-7_142600059.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/458185722331922442/0a2063d34e7ff87d54506ddac460582a.gif',
'https://cdn.discordapp.com/attachments/453668198231965706/456685024553467904/tumblr_p9ksvnqT5p1td53jko1_540.gif',
]

module.exports.run = async (client, message, args, level) => {
 if (!message.channel.nsfw) return message.channel.send(":warning: This channel is not marked as **NSFW**")
 if(!message.mentions.members.first().user.username === message.isMentioned(message.author) ) {
message.channel.send(`**${message.author.username}** fucked **${message.mentions.members.first().user.username}**`, {
    file: randomfuck[Math.floor(Math.random() * randomfuck.length)]
  });
 }
}

module.exports.help = {
  name: "fuck"
}
