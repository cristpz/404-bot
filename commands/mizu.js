const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let mizuembed = new Discord.RichEmbed()
  .setDescription(`
  Happy Birthday Mizu~!
  I hope you live a great life, with a big tiddy gf and a v6 clio.
  (I know 1 language isn't enough so here have 50 of those)
  
    Albanian: “Gëzuar ditëlindjen”
    Bosnian: “Sretan rođendan”
    Bulgarian: “Chestit Rozhden den”
    Catalan: “Per molts anys”
    Cheinese: “Shēngrì kuàilè”
    Czech: “Všechno nejlepší k narozeninám”
    Danish: “Tillykke med fødselsdagen”
    Dutch: Fijne verjaardag”
    Filipino: “Maligayang kaarawan”
    Finnish: “Hyvää syntymäpäivää”
    French: “Bon anniversaire”
    Galician: “Feliz Aniversario”
    German: “Alles Gute zum Geburtstag”
    Greek: “Charoúmena genéthlia”
    Hawaiian: “Hauʻoli lā hānau”
    Hebrew: “יום הולדת שמח”
    Hungarian: “Boldog születésnapot”
    Icelandic: “Til hamingju með afmælið”
    Igbo: “Ezi ncheta ọmụmụ”
    Indonesian: “Selamat ulang tahun”
    Irish: “Lá breithe shona duit”
    Italian: “Buon compleanno”
    Japanese: “お誕生日おめでとうございます”
    Kazakh: “Twğan küniñ quttı bolsın”
    Khmer: “Rikreay​ thngai​ kamnaet”
    Korean: “Saeng-il chugha”
    Kurdish: “Rojbûna te pîroz be”
    Latin: “Felix natalis”
    Lithuanian: “Su gimtadieniu”
    Luxembourgish: “Alles Guddes fir däi Gebuertsdag”
    Malay: “Selamat Hari lahir”
    Mongolian: “Төрсөн өдрийн мэнд”
    Nepali: “Janmadinakō”
    Norwegian: “Gratulerer med dagen”
    Polish: “Wszystkiego najlepszego”
    Portuguese: “Feliz Aniversário”
    Romanian: “La multi ani”
    Russian: “S dnem ​​rozhdeniya”
    Serbian: “Srećan rođendan”
    Slovenian: “Vse najboljše”
    Somali: “Dhalasho Wacan”
    Spanish: “Feliz cumpleaños”
    Swahili: “Siku ya kuzaliwa ya furaha”
    Swedish: “Grattis på födelsedagen”
    Tai: “S̄uk̄hs̄ạnt̒ wạn keid”
    Turkish: “Doğum günün kutlu olsun”
    Ukranian: “Z Dnem narodzhennya”
    Vietnamese: “Chúc mừng sinh nhật”
    Welsh: Penblwydd hapus”
    Zulu: “Usuku olumnandi lokuzalwa`)
  .setThumbnail("https://cdn.discordapp.com/avatars/376385621956231188/d5fdb07891b57c2cdc61cef0fcc7a511.png?size=1024")
  .setColor('#3a0be7');
  message.channel.send(mizuembed);
    }

module.exports.help = {
  name: "mizu"
}
