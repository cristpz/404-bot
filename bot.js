const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let purple = botconfig.purple;

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

  bot.user.setActivity(`${bot.users.size} users | 404info`, {type: "WATCHING"});
});

bot.on("guildCreate", guild => {
  console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user.username}`);
});

bot.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: botconfig.prefix
      };
    }

  let prefix = prefixes[message.guild.id].prefixes;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);



  if(cmd === `${prefix}report`){

    //4!report @Crist1234 you're a shit developer

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Sorry lad I cannot find that user.")
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("User Report")
    .setColor("#3a0be7")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("It seems like this server doesn't have a channel for reports.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }

if(cmd === `${prefix}serverinfo`){

let sicon = message.guild.iconURL;
let serverembed = new Discord.RichEmbed()
  .setDescription("Server Info")
  .setColor("#3a0be7")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Active Since", message.guild.createdAt)
  .addField("Server Owner", message.guild.owner)
  .addField("You joined", message.member.joinedAt)
  .addField("Member Count", message.guild.memberCount);

  return message.channel.send(serverembed);
}

if(cmd === `${prefix}info`){

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription(`**Hello ${message.author}, I'm 404, a basic multi-purpose bot made by Akemi#4040**`)
  .setColor("#3a0be7")
  .setThumbnail(bicon)
  .addField("Command Count", "33 currently")
  .addField("Cars", " `nsx` `cliowilliams` `accord` `sc300` `lanos` `matiz` `polonez` `206` `207` `306` `307` `406` `407` ")
  .addField("Fun", " `8ball` `cat` `dog` `google` `pick` `ratewaifu` ")
  .addField("Actions", " `kill` `suicide` ")
  .addField("Lewd (NSFW only)", " `lewdneko` ")
  .addField("Moderation", " `kick` `ban` `addrole` `removerole` `prefix` ")
  .addField("Miscellaneous", " `ping` `avatar` `hello` `salute` `die` `nou` `botowner` ")


  .addField("Add me to your discord server aswell:", "https://discordapp.com/api/oauth2/authorize?client_id=468180436032421898&permissions=8&scope=bot")
  .addField("Limited permissions invite link:", "https://discordapp.com/oauth2/authorize?client_id=468180436032421898&permissions=1609952374&scope=bot")
  .addField("Join my discord server:", "https://discord.gg/Jtb6gs5")
  .addField("Since", "Monday 16th of July 2018");

   return message.channel.send(botembed);
  }
  if(cmd === `${prefix}hello`){
   return message.channel.send("Hey there lad!");
}
if(cmd === `${prefix}die`){
 return message.channel.send("no u ");
}
if(cmd === `${prefix}botowner`){
  return message.channel.send("<@306104099185623042>")
}
if (cmd === `${prefix}nsx`) {
	  return message.channel.send(`
      Manufacturer: Honda (International)

Production: 1990–2005 (first generation)

**Body and chassis**

Class: Sports car

**Bio**

The Honda NSX, marketed in North America as the Acura NSX, is a two-seat, mid-engine sports car manufactured by Honda/Acura.

The origins of the NSX trace back to 1984, with the HP-X (Honda Pininfarina eXperimental)[1] concept, which was a mid-engined 3.0 L V6 engined rear wheel drive sports car.
Honda committed to the project, with the intention of meeting or exceeding the performance of the then V8 engined Ferrari range, while offering reliability and a lower price point.
The concept thus evolved and had its name changed to NS-X, which stood for "New", "Sportscar" "eXperimental",[2] although the production model was launched as the NSX.

Image Link: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Honda_NSX_reg_1991_2977_cc.JPG/1200px-Honda_NSX_reg_1991_2977_cc.JPG`)
}
if (cmd === `${prefix}cliowilliams`) {
	  return message.channel.send(`
      **Bio**

	  In 1993, Renault launched the Clio Williams as a limited edition of 3,800 cars
	  (1,300 more than they needed for homologation purposes) with each car bearing a numbered plaque on the dash.
	  These sold out so quickly that Renault ended up building 1,600 more.
      After the first series, due to the demand, Renault built the Williams 2 and 3, with more than 12,000 eventually being built.
      However, many new road cars were directly converted to race cars and when damaged replaced with another converted road car,
	  which means that the actual number of road cars is significantly lower than the figures suggest.

	  Image Link: https://i.ytimg.com/vi/f-iiZ_Y0dQY/maxresdefault.jpg`)
}
if (cmd === `${prefix}accord`) {
    return message.channel.send(`
      **Overview**

Production: August 1997–2002 (sedan)
September 1998–2002 (coupe)

**Assembly**

Marysville Auto Plant, USA
Jalisco, Mexico (Honda De México)
Alor Gajah, Malaysia
Sayama, Japan
Guangzhou, China
Hsinchu, Taiwan
North Jakarta, Indonesia
Santa Rosa City, Philippines
Ayutthaya, Thailand
Nelson, New Zealand (1998-2001)

Designer: Shinji Takashima; Toshihiko Shimizu (sedan: 1995)
Don Herner; Eric Schumaker (coupe: 1995, 1996)

**Body and chassis**

Class: Mid-size
Body style: 4-door sedan (US body, chassis no. CG1/CG5/CG6)
2-door coupe (US body, chassis no. CG2/CG3/CG4, North America only)
Layout: FF layout
Related: Acura CL
Acura MDX
Acura TL
Honda Inspire
Honda Odyssey (North America)

**Powertrain**

Engine: 2.0L F20B5 I4 147 hp (110 kW)
2.3L F23A1 I4 150 hp (112 kW)
2.3L F23A4 I4 148 hp (110 kW)
2.3L F23A5 I4 135 hp (101 kW)
3.0L J30A1 V6 200 hp (150 kW)
Transmission: 4-speed automatic
5-speed manual

**Dimensions**

Wheelbase: Sedan: 2,715 mm (106.9 in)
Coupe: 2,670 mm (105.1 in)
Length: 1998–2000 Sedan: 4,796 mm (188.8 in)
2001–02 Sedan: 4,811 mm (189.4 in)
1998–2002 Coupe: 4,745 mm (186.8 in)
Width: 1,786 mm (70.3 in)
Height: 1998–2002 Sedan: 1,445 mm (56.9 in)
1998–2002 V6 Sedan: 1,455 mm (57.3 in)
1998–2000 Coupe: 1,400 mm (55.1 in)
2001–02 Coupe: 1,394 mm (54.9 in)
2001–02 V6 Coupe: 1,405 mm (55.3 in)
Curb weight: 1,451 kg (3,200 lb)

**Chronology**

Successor: Honda Accord (North America seventh generation)

Image Link: https://m.media-amazon.com/images/I/61GH1-77z0L._UY560_.jpg`)
}
if (cmd === `${prefix}sc300`) {
  return message.channel.send(`
    **Overview**

Also called: Toyota Soarer (Z30)
Production: April 1991 – 7 July 2000
Assembly: Japan: Susono, Shizuoka (Higashi Fuji plant); Toyota, Aichi (Motomachi plant)
Designer: Erwin Lui, Denis Campbell (1988, 1989)

**Body and chassis**

Body style: 2-door coupé
Related: Toyota Supra

**Powertrain**

Engine: 3.0 L 2JZ-GE I6 (SC 300)
4.0 L 1UZ-FE V8 (SC 400)
Transmission: 4-speed A340E (1992-00 SC 300, 1992-97 SC 400) / A341E (1992-99 SC 400 GT-L) automatic
5-speed A650E automatic (1998-00 SC 400)
5-speed W58 manual (1992–97 SC 300)

**Dimensions**

Wheelbase: 105.9 in (2,690 mm)
Length: 191.3 in (4,859 mm) (1992–97)
192.5 in (4,890 mm) (1998-00)
Width: 70.5 in (1,791 mm) (1992–97)
70.9 in (1,801 mm) (1998-00)
Height: 52.4 in (1,331 mm) (1992–94 SC 300)
52.6 in (1,336 mm) (1995–97 SC 300 & 1992–97 SC 400)
53.2 in (1,351 mm) (1998-00 SC 300/400)
Curb weight: 3,485 lb (1,581 kg) (1992 SC 300 manual)
3,505 lb (1,590 kg) (1992 SC 300 automatic)
3,604 lb (1,635 kg) (1992 SC 400)

Image Link: https://cdn.discordapp.com/attachments/462742060215304204/467868924780740609/StreetLegal_Redline2015-03-0616-28-28-14.png`)
}

if (cmd === `${prefix}salute`) {
  return message.channel.send(`Greetings to all of my fellow Russians.
	  https://cdn.discordapp.com/attachments/479929732708958208/479933123702816769/ussr.png`)
}

if (cmd === `${prefix}lanos`) {
	  return message.channel.send(`
      **Overview**

Manufacturer: Daewoo
Also called:
Chevrolet Lanos
Daewoo Sens
Doninvest Assol
FSO Lanos
ZAZ Lanos
ZAZ Sens
ZAZ Chance
Production: 1997–2002 (Daewoo)
1997–present (CKD and license-built models)
Assembly: Bupyeong, South Korea
6th of October City, Egypt (GM Egypt, since 2007)
Cairo, Egypt (Daewoo Motors Egypt, 1998–2012)
Taganrog, Russia (TagAZ)
Zaporizhia, Ukraine (AvtoZAZ)
Warsaw, Poland (FSO)
Hanoi, Vietnam (VIDAMCO)
Designer: Giorgetto Giugiaro

**Body and chassis**

Class: Subcompact car (B/C)
Body style: 3 and 5-door hatchback
4-door sedan
2-door convertible (concept)
2-door panel van (since 2006)
Layout: Front-engine, front-wheel-drive
Platform: GM T platform

**Powertrain**

Engine:
1.3 L MeMZ I4 (petrol)
1.4 L MeMZ I4 (petrol)
1.4 L E-TEC I4 (petrol)
1.5 L E-TEC I4 (petrol)
1.6 L E-TEC I4 (petrol)
1.5 L ACTECO I4 (petrol)

Transmission:
5-speed manual
4-speed GM 4T40E automatic
4-speed ZF 4HP16 automatic

**Dimensions**

Wheelbase: 2,520 mm (99.2 in)
Length: 4,074 mm (160.4 in) (hatchback)
4,235 mm (166.7 in) (sedan)
4,247 mm (167.2 in) (panel van)
Width: 1,678 mm (66.1 in)
Height: 1,432 mm (56.4 in)
1,908 mm (75.1 in) (panel van)

**Chronology**

Predecessor: Daewoo Cielo
Successor: Daewoo Kalos

Image Link: https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/2001_Daewoo_Lanos_%28T150%29_Sport_3-door_hatchback_%282010-06-17%29_01.jpg/1200px-2001_Daewoo_Lanos_%28T150%29_Sport_3-door_hatchback_%282010-06-17%29_01.jpg`)
}
if (cmd === `${prefix}matiz`) {
	  return message.channel.send(`
      **Overview**

Also called: Daewoo Matiz, Matiz II
Baojun Lechi (China)
Chevrolet Exclusive (Pakistan)
Chevrolet Joy (Pakistan)
Chevrolet Lechi (China)
Chevrolet Matiz
UzDaewoo Matiz
Ravon Matiz
Formosa Matiz (Taiwan)
FSO Matiz
Pontiac G2
Pontiac Matiz
Chevrolet Taxi 7:24 Chronos (Colombia)
Daewoo Matix (Colombia)
Production	1998–2003 (South Korea)
1998–present (under license)
1998-2008 (M100) (Romania)
Assembly: Changwon, South Korea
Kerman, Iran (Kerman Khodro)
Asaka, Uzbekistan (UzDaewoo)
Warsaw, Poland (FSO)
Craiova, Romania (Rodae)
Hanoi, Vietnam (VIDAMCO)
Halol, Gujarat, India (GM India)
Karachi, Pakistan (Nexus Automotive)
Taipei, Taiwan (Formosa)
Designer: Giorgetto Giugiaro

**Body and chassis**

Body style: 5-door hatchback
5-door panel van
Related: Italdesign Lucciola

**Powertrain**

Engine: 0.8 L S-TEC I3 (petrol)
1.0 L S-TEC I4 (petrol)
1.2 L P-TEC I4 (petrol) (China)
Transmission: 5-speed manual
3-speed automatic

**Dimensions**

Wheelbase: 2,340 mm (92.1 in)
Length: 3,495 mm (137.6 in)
Width: 1,495 mm (58.9 in)
Height: 1,485 mm (58.5 in)

Image Link: https://www.cars-data.com/pictures/daewoo/daewoo-matiz_533_1.jpg`)
}
if (cmd === `${prefix}polonez`) {
	  return message.channel.send(`
      **Overview**

Manufacturer: FSO
Also called:
FSO Caro
FSO Celina (sedan)
FSO Prima
FSO Truck (pickup)
FSO Caro Pick-up

Production:
1991-1997
1992-1997 (pickup)
Assembly:
Warsaw, Poland
Nysa, Poland

Designer:
Antoni Kasznicki
Zbigniew Kowalczyk

**Body and chassis**

Class: Small family car

Body style:
5-door hatchback (1991-1997)
4-door sedan (1996-1997)
2-door coupé utility (pickup) (1992-1997)
2-door coupé utility (pickup, extended cab) (1992-1997)
5-door LAV (1993-1997)

Layout: FR layout

**Powertrain**

Engine:
1.4 L DOHC K16 I4
1.5 L OHV I4
1.6 L OHV I4
2.0 L Ford SOHC
1.9 L XUD9A diesel I4

Transmission:
5-speed manual

**Dimensions**

Wheelbase: 2,509 mm (98.8 in)
Length: 4,318 mm (170.0 in)
Width: 1,650 mm (65.0 in)
Height: 1,420 mm (55.9 in)
Curb weight: 1,115 kg (2,458 lb)-1,135 kg (2,502 lb)

**Chronology**

Predecessor: FSO Polonez
Successor: Daewoo-FSO Polonez Caro Plus

Image Link: https://upload.wikimedia.org/wikipedia/commons/0/0e/FSO_Polonez_Caro_green_LF.jpg`)
}
if (cmd === `${prefix}407`) {
    return message.channel.send(`
            **Overview**

Manufacturer: Peugeot
Production: 2003–2010
Assembly: France, Rennes (Rennes Plant)
Malaysia, Gurun (NAM)

**Body and chassis**

Class: Large family car (D)
Body style: 4-door saloon/sedan
5-door estate/station wagon
2-door coupé
Layout: Front-engine, front-wheel-drive
Platform: PSA PF3 platform
Related: Citroën C5
Citroën C6

**Dimensions**

Wheelbase: 2,725 mm (107.3 in)
Length: 4,676 mm (184.1 in) (sedan)
4,763 mm (187.5 in) (wagon)
4,815 mm (189.6 in) (coupé)
Width: 1,811 mm (71.3 in) (sedan, wagon)
1,868 mm (73.5 in) (coupé)
Height: 1,400 mm (55.1 in) (coupé)
1,455 mm (57.3 in) (sedan)
1,494 mm (58.8 in) (wagon)
Kerb weight: 1555kg (2.2 petrol sedan Man)
1580kg (2.0 diesel sedan Man)
1591kg (2.2 petrol sedan Auto)
1616kg (2.0 diesel sedan Auto)
1646kg (2.2 petrol wagon Auto)
1660kg (3.0 petrol sedan Auto)
1671kg (2.0 diesel wagon Auto)
1715kg (3.0 petrol wagon Auto)

**Chronology**

Predecessor: Peugeot 406
Successor: Peugeot 508

Image Link: https://pictures.topspeed.com/IMG/jpg/200612/2006-peugeot-407-40.jpg`)
}
if(cmd === `${prefix}nou`){
return message.channel.send("get shot")
}
if (cmd === `${prefix}rover25`) {
  return message.channel.send(`
    **Overview**

Also called:
Chinese markets ('06-'08)
Roewe 250 (hatchback)
Roewe 350 (sedan)
Production: 2000–2005

**Body and chassis**

Body style: 3-door hatchback
5-door hatchback
"Commerce" (panel van)
Related: Rover 45
Rover Streetwise
MG ZR
MG 3 SW

**Powertrain**

Engine: 1.1 L K-Series I4 (petrol)
1.4 L K-Series I4 (petrol)
1.6 L K-Series I4 (petrol)
1.8 L K-Series I4 (petrol)
1.8 L K-Series VVC I4 (petrol)
2.0 L L-Series I4 (turbodiesel)
Transmission: 5-speed manual
6-speed automatic
CVT

**Dimensions**

Wheelbase: 2,500 mm (98.4 in)
Length: 3,990 mm (157.1 in)
Width: 1,690 mm (66.5 in)
Height: 1,420 mm (55.9 in)

Image Link: http://partsopen.com/images/2004-rover-25-3.jpg`)
}
if (cmd === `${prefix}406`) {
  return message.channel.send(`
    **Overview**

Manufacturer: Peugeot
Also called: Peugeot Coupé
Production:
1995–2004 (France, United Kingdom)
1996–2008 (Egypt)
1997–2003 (Italy, coupé)
Assembly	Sochaux, France (Sochaux Plant)
Ryton, United Kingdom (Ryton Plant)
Val di Sangro, Italy
Cairo, Egypt (AAV) Iran٫ Tehran (IKCO)
Designer: Laurent Rossi (sedan) (1991)
Davide Arcangeli and Lorenzo Ramaciotti at Pininfarina (coupé)

**Body and chassis**

Class: Large family car (D)
Body style:
4-door saloon
5-door estate
2-door coupé
Layout: Front-engine, front-wheel-drive
Related: Citroën Xantia

**Powertrain**

Engine: 1.6 L I4 (petrol)
1.8 L I4 (petrol)
2.0 L I4 (petrol)
2.0 L I4 turbo (petrol)
2.2 L I4 (petrol)
2.9 L V6 (petrol)
1.9 L I4 (diesel)
2.0 L I4 (diesel)
2.1 L I4 (diesel)
2.2 L I4 (diesel)
Transmission:
4-speed automatic
5-speed manual

**Dimensions**

Wheelbase: 2,700 mm (106.3 in)
Length: 4,555 mm (179.3 in) (sedan)
4,736 mm (186.5 in) (wagon)
4,615 mm (181.7 in) (coupé)
Width: 1,764 mm (69.4 in) (sedan)
1,760 mm (69.3 in) (wagon)
1,780 mm (70.1 in) (coupé)
Height: 1,396 mm (55.0 in)

**Chronology**

Predecessor: Peugeot 405
Successor: Peugeot 407

Image Link: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/406_phase_1.JPG/1200px-406_phase_1.JPG`)
}
if (cmd === `${prefix}307`) {
  return message.channel.send(`
    **Overview**

Manufacturer: Peugeot
Production:
2001–2008 (France)
2004–2011 (Argentina)
2001–2014 (China)
Assembly:
Mulhouse, France (Mulhouse Plant)
Sochaux, France (Sochaux Plant)
Wuhan, China (Dongfeng)
Villa Bosch, Argentina
El Palomar, Argentina

**Body and chassis**

Class: Small family car
Body style: 3 and 5-door hatchback
2-door coupé cabriolet
5-door estate
4-door saloon
Layout: Front-engine, front-wheel-drive
Platform: PSA PF2 platform
Related: Citroën C4
Citroën C4 Picasso
Peugeot 3008
Powertrain
Engine: 1.4 L ET3 I4 (petrol)
1.6 L TU5 I4 (petrol)
1.6 L DV6 HDi I4 (diesel HDII)
2.0 L EW10 I4 (petrol)
2.0 L DW10 HDi I4 (diesel)

**Dimensions**

Wheelbase: 2,610 mm (102.8 in) (hatchback, coupé cabriolet)
2,710 mm (106.7 in) (sedan, wagon)
Length: 4,210 mm (165.7 in) (hatchback)
4,350 mm (171.3 in) (coupé cabriolet)
4,420 mm (174.0 in) (wagon)
4,470 mm (176.0 in) (sedan)
Width: 1,730 mm (68.1 in)
Height: 1,510 mm (59.4 in)
1,420 mm (55.9 in) (coupé cabriolet)

**Chronology**

Predecessor: Peugeot 306
Successor: Peugeot 308 (hatchback, wagon, coupé cabriolet)
Peugeot 408 (saloon)

Image Link: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/2002_Peugeot_307_LX_16v_1.6_Front.jpg/1200px-2002_Peugeot_307_LX_16v_1.6_Front.jpg`)
}
if (cmd === `${prefix}206`) {
  return message.channel.send(`
    **Overview**

Manufacturer: Peugeot

**Body and chassis**

Class: Supermini (B)
Body style: 3/5-door hatchback
2-door coupé cabriolet
4-door sedan
5-door station wagon
Layout: Front-engine, front-wheel-drive
Related: Citroën C2
Citroën C3
Peugeot 1007
IKCO Runna

**Powertrain**

Engine: 1.0 L D4D I4 (petrol)
1.1 L TU1JP I4 (petrol)
1.4 L TU3JP I4 (petrol)
1.4 L ET3J4 I4 (petrol)
1.4 L TU3JP I4 (petrol)
1.4 L TU3A I4 (petrol)
1.6 L TU5JP I4 (petrol)
1.6 L TU5JP4 I4 (petrol)
2.0 L EW10J4 I4 (petrol)
2.0 L EW10J4S I4 (petrol)
1.4 L DV4 HDi I4 I4 (diesel)
1.6 L DV6 HDi I4 (diesel)
1.9 L DW8 I4 (diesel)
2.0 L DW10 I4 (diesel)
Transmission: 4-speed automatic
5-speed manual
6-speed manual (motorsport only)

**Dimensions**

Wheelbase	2,442 mm (96.1 in)
Length: 3,835 mm (151.0 in) (hatchback)
4,000 mm (157.5 in) (coupé cabriolet)
4,188 mm (164.9 in) (sedan, Europe)[2]
4,235 mm (166.7 in) (sedan, South America)[3]
4,028 mm (158.6 in) (station wagon)
Width: 1,652 mm (65.0 in) (hatchback)
1,652 mm (65.0 in) (coupé cabriolet)
1,655 mm (65.2 in) (sedan)
1,652 mm (65.0 in) (station wagon)
Height: 1,428 mm (56.2 in) (hatchback)
1,373 mm (54.1 in) (coupé cabriolet)
1,456 mm (57.3 in) (sedan)
1,460 mm (57.5 in) (station wagon)
Kerb weight: 950–1,145 kg (2,094–2,524 lb)

**Chronology**

Predecessor: Peugeot 205
Successor: Peugeot 207

Image Link: https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/2002_Peugeot_206_LX_1.4_Front.jpg/1200px-2002_Peugeot_206_LX_1.4_Front.jpg`)
}
if (cmd === `${prefix}207`) {
  return message.channel.send(`
    **Overview**

Manufacturer: Peugeot
Production: 2006–2014 (France)
2010–2013 (Indonesia)
2006–2014 (207 CC)
2012–2014 (207+) (207i New)
2010–present (Iran Khodro)
Assembly: Poissy, France (Poissy Plant)
Madrid, Spain (Madrid Plant)
Trnava, Slovakia (Trnava Plant)
Jakarta, Indonesia (Gaya)
Iran Tehran (Iran Khodro)

**Body and chassis**

Class: Supermini (B)
Body style: 3-door hatchback
5-door hatchback
2-door coupé
5-door estate/station wagon
4-door saloon
Layout: Front-engine, front-wheel-drive
Platform: PSA PF1 platform
Related: Citroën C3
Peugeot 407
IKCO Runna
Peugeot 207i

**Powertrain**

Engine: 1.4 L I4 (petrol)
1.4 L I4 (diesel)
1.6 L I4 (petrol)
1.6 L I4 (diesel)
Transmission: 5-speed manual
6-speed manual
4-speed automatic

**Dimensions**

Wheelbase: 2,540 mm (100.0 in)
Length: Hatchback, 4,045 mm (159.3 in)
Wagon, 4,164 mm (163.9 in)
Coupé, 4,037 mm (158.9 in)
Width: 1,748 mm (68.8 in)
Height:1,472 mm (58.0 in)
Curb weight: 1,243–1,283 kg (2,740–2,829 lb)

**Chronology**

Predecessor	Peugeot 206
Successor	Peugeot 208
Peugeot 2008 (207 SW)

Image Link: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Peugeot_207a_%28cropped%29.jpg/1200px-Peugeot_207a_%28cropped%29.jpg`)
}
if(cmd === `${prefix}306`) {
  return message.channel.send(`
    **Overview**

Manufacturer: Peugeot
Production: 2.846 million units (1993–2002)
Assembly: Poissy, France
Ryton-on-Dunsmore, Great Britain
El Palomar, Argentina (Sevel; Sedan)
Los Andes, Chile
Barra de Carrasco, Uruguay (Oferol; Break)
Designer: Pininfarina

**Body and chassis**

Class: Small family car (C)
Body style: 3/5-door hatchback
4-door saloon
5-door estate
2-door cabriolet
Layout: FF layout
Related: Citroën Xsara
Citroën ZX

**Powertrain**

Transmission: 4-speed automatic ZF 4HP14
4-speed automatic AL4
5-speed manual MA 5
5-speed manual BE 3/5
6-speed manual BE 3/6

**Dimensions**

Wheelbase: 2,580 mm (102 in)
Length: 4,030 mm (159 in) (hatchback)
4,267 mm (168 in) (sedan)
4,338 mm (171 in) (wagon)
Width: 1,680 mm (66 in)
Height: 1,380 mm (54 in) (hatchback)
1,386 mm (55 in) (sedan)
1,415 mm (56 in) (wagon)

**Chronology**

Predecessor: Peugeot 309
Successor: Peugeot 307

Image Link: https://upload.wikimedia.org/wikipedia/commons/3/33/Peugeot_306_rear_20080822.jpg`)
}
if(cmd === `${prefix}purge`) {
    // This command removes all messages from all users in the channel, up to 100.

    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);

    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a valid number between 2 and 100");

    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages, reason: ${error}`));
}
if(cmd === `${prefix}say`) {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
}

});

client.login(process.env.BOT_TOKEN);