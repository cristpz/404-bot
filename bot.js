const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const client = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
	
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
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
  bot.user.setActivity(`the void | 404help`, {type: "WATCHING"});

});

bot.on('guildMemberAdd', member => {
  var role = member.guild.roles.find('name', 'Lads');
  member.addRole(role);
});
	
bot.on("guildCreate", guild => {
  console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user.username}`);
});

bot.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (!message.content.startsWith(prefix)) return;
  if(commandfile) commandfile.run(bot,message,args);
  var author = message.author;
	
	if (message.channel.id === '505302099769163777') {
	    if (isNaN(message.content)) {
	        message.delete()
		message.author.send('This channel is for posting bot IDs, please post a valid bot ID.');
	    }
	}

	if(cmd === `${prefix}suggestiontest`){
	  if(message.author.id !== botconfig.ownerID) return;
bot.guilds.get("500244270373011466").channels.get("504743305427550219").send("cool, it worked.");
	}
	
	if(cmd === `${prefix}suggest`){
  let suggestion = args.slice(0).join(" ");
  if (!suggestion) return message.reply("Please enter a valid suggestion!");
  let suggestembed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .addField("With ID", message.author.id)
  .addField("Suggestion", suggestion)
  .addField("Time/Date", message.createdAt)
  .setColor("3a0be7");
bot.guilds.get("500244270373011466").channels.get("504743305427550219").send(suggestembed);
  message.reply('your suggestion has been saved, thank you!');
}
	
  if(cmd === `${prefix}ping`){
  message.channel.send(new Date().getTime() - message.createdTimestamp + " ms currently.");
  }
	 if(cmd === `${prefix}specialcuddle`){
  let specialcuddleembed = new Discord.RichEmbed()
     .setTitle(`${message.author.tag}, here have a cuddle from me ^-^`)
     .setColor("#3a0be7")
     .setImage("https://thumbs.gfycat.com/BiodegradableFluffyBluefish-size_restricted.gif");
  message.channel.send(specialcuddleembed);
  }
if (message.isMentioned(bot.user)) {
    message.reply('my prefix is `404`, use `404help` for more commands!');
}
  if(cmd === `${prefix}report`){

    //404report @Crist1234 you're a shit developer

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
	if(cmd === `${prefix}subreddits`) {
		let bicon = bot.user.displayAvatarURL;
  let redditembed = new Discord.RichEmbed()
  .setDescription(`**Hello ${message.author}, those are the subreddit commands that I placed on another command, since discord's char limit is 2000**`)
  .setColor("#3a0be7")
  .setThumbnail(bicon)
  .addField("Subreddits [1]", " `jeepreddit` `toyotareddit` `audireddit` `ferrarireddit` `porschereddit` `mazdareddit` `mazdaprotegereddit` `hondareddit` `s2000reddit` `crownvictoriareddit` `hyundaireddit` `mr2reddit` `fordreddit` `lexusreddit` `corvettereddit` `corollareddit` `ft86reddit` `scionreddit` `mitsubishireddit` `dsmreddit` `4g63reddit` `300zxreddit` `mustangreddit` `peugeotreddit` `citroenreddit` `teslamotorsreddit` `voltreddit` `mercedesreddit` `jaguarreddit` `pontiacreddit` `volkswagenreddit` `beetlereddit` `fahrvergnugenreddit` `dodgereddit` `moparreddit` `subarureddit` `240sxreddit` `miatareddit` `camaroreddit` `landroverreddit` `serieslandroverreddit` `bmwreddit` `tiburonreddit` `saabreddit` `toyotasuprareddit` `volvoreddit` `infinitireddit` `dieselreddit` `rotariesreddit` ")
  .addField("Subreddits [2]", " `autosreddit` `drivingreddit` `4wheelsnewsreddit` `askcarsalesreddit` `topgearreddit` `usercarsreddit` `cartalkreddit` `cartalkukreddit` `mechanicadvicereddit` `autodetailingreddit` `shittycarmodsreddit` `projectcarreddit` `caravreddit` `carpornreddit` `f1pornreddit` `rallypornreddit` `motorsportpornreddit` `spottedreddit` `exoticspottingreddit` `justtrolledintotheshopreddit` `askashittymechanicreddit` `automotivetrainingreddit` `motorsportsreddit` `formula1reddit` `indycarreddit` `formulaereddit` `wecreddit` `wtccreddit` `roadrallysreddit` `driftingreddit` `racingreddit` `kartingreddit` `rallyreddit` `autoxreddit` `autocrossreddit` `nascarreddit` `overlandingreddit` `4x4reddit` `startmotorsportreddit` `stancereddit` `fitmentreddit` `trucksreddit` `jdmreddit` `importsreddit` `musclecarreddit` `mylittlemotorheadreddit` ");
   return message.channel.send(redditembed);
}
	 if(cmd === `${prefix}reload`) {
            if(message.author.id !== botconfig.ownerID) return;
            console.clear();
               bot.destroy()
               bot.login(process.env.BOT_TOKEN);
             message.channel.send("Reloaded, have fun lads.");
         return;
        }

if(cmd === `${prefix}help`){

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription(`**Hello ${message.author}, I'm 404, a basic multi-purpose bot made by Akemi#4040**`)
  .setColor("#3a0be7")
  .setThumbnail(bicon)
  .addField("Command Count", "195 currently")
  .addField("Cars", " `nsx` `cliowilliams` `accord` `sc300` `lanos` `matiz` `polonez` `206` `207` `306` `307` `406` `407` `hakosuka` `corolla` `corollawrc` `a4` `impreza` `eclipse` `w8` `gt40` `s2k` ")
  .addField("Fun", " `8ball` `cat` `dog` `google` `pick` `rate` `ratewaifu` `neko` `generateavatar` `yn` `lizard` `gasmoji` `coinflip` `define` `motivate` `meme` `shitpost` `roll` `weed` `anime` `csgo` `generatewp` `why` `fact` `owoify` `generatewaifu` `ppsize` `tidsize` ")
  .addField("Actions", " `suicide` `slap` `pat` `hug` `cuddle` `kiss` `smug` `poke` `feed` ")
  .addField("Lewd (NSFW only)", " `lewdneko` `lewdtrap` `fuck` `randomhentai` `randomhentaigif` `spank` `bj` `lewdholo` `lewdkitsune` `feet` `lewd` `analfuck` `femdom` `wank` `tits` `yuri` ")
  .addField("Moderation", " `kick` `ban` `addrole` `removerole` `votekick` `clear` `lockdown` ")
  .addField("Miscellaneous", " `ping` `avatar` `hello` `salute` `die` `nou` `botowner` `botusers` `help` `info` `serverinfo` `userinfo` `special` `suggest` `server` `website` ")
  .addField("Bot Owner ONLY", " `reload` ")
  .addField("Invite", "YOUR INVITE LINK HERE")
  .addField("Patreon", "YOUR PATREON LINK")
  .addField("PayPal", "YOUR PAYPAL LINK")
  .setFooter("Check 404subreddits for more commands!");

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
The concept thus evolved and had its name changed to NS-X, which stood for "New", "Sportscar" "eXperimental", although the production model was launched as the NSX.

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

Image Link: https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/1996_Lexus_SC_300_3.0L_front_6.13.18.jpg/1024px-1996_Lexus_SC_300_3.0L_front_6.13.18.jpg`)
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
if(cmd === `${prefix}say`) {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
}
if(cmd === `${prefix}hakosuka`) {
    return message.channel.send(`
**Overview**

Production: Feb 1969 – 1972
Designer: Shinichiro Sakurai

**Body and chassis**

Body style:	
4-door sedan
2-door coupe

Layout: FR layout

**Powertrain**

Engine: 2.0 L S20 I6
Transmission: 5-speed manual

**Dimensions**

Wheelbase: 2,570 mm (101.2 in)
Length: 4,400 mm (173.2 in)
Width: 1,665 mm (65.6 in)
Height: 1,370 mm (53.9 in)
Curb weight: 1,100 kg (2,425.1 lb)

(Note: Hakosuka (Japanese: ハコスカ) was a name given by fans of the PGC and KPGC10 Skyline GT-R's.)

Image Link: https://upload.wikimedia.org/wikipedia/commons/c/cc/C10GT-R.jpg`)
}
if(cmd === `${prefix}corolla`) {
    return message.channel.send(`
 **Overview**

Manufacturer: Toyota Motor Corporation
Also called: Toyota Sprinter Carib
Toyota Sprinter
Chevrolet Prizm
Production: May 1995–March 2002
Assembly: Cambridge, Ontario, Canada (TMMC)
Adapazari, Turkey
Fremont, California (NUMMI)
Toyota City, Japan
Durban, South Africa
Indaiatuba, Brazil
Santa Rosa, Laguna, Philippines
Karawang, Indonesia
Chachoengsao, Thailand
Thames, New Zealand (CKD)

**Body and chassis**

Class: Compact car
Body style: 4-door sedan
2-door coupé (Japan)
3-door hatchback
5-door liftback
5-door station wagon
Layout: FF layout
Platform: Toyota Corolla

**Powertrain**

Engine:	
//Petrol
1,331 cc 4E-FE I4 (E110)
1,398 cc 4ZZ-FE I4
1,498 cc 5A-FE I4
1,587 cc 4A-GE/4A-FE I4
1,598 cc 3ZZ-FE I4
1,762 cc 7A-FE I4 (AE112/115)

//Diesel
1,974 cc 2C-III I4
2,184 cc 3C-E I4

Transmission: 5-speed manual
6-speed manual (Japan/Europe)
3/4-speed automatic

**Dimensions**

Wheelbase: 2,465 mm (97.0 in)
Length: Hatchback (4,120 mm (162 in))
Liftback (4,270 mm (168 in))
Saloon (4,315 mm (169.9 in))
Station wagon: 4,340 mm (171 in)
Width: 1,690 mm (67 in)
Height: Hatchback, liftback, sedan (1,380 mm (54 in))
Wagon (1,445 mm (56.9 in))
Kerb weight: 1,095 kg (2,414 lb)

**Chronology**

Predecessor: Corolla E100
Successor: Corolla E120

Image Link: https://upload.wikimedia.org/wikipedia/commons/6/60/1995_Toyota_Corolla_01.jpg`)
}
if(cmd === `${prefix}corollawrc`) {
	return message.channel.send(`
The Toyota Corolla WRC (World Rally Car) is special purpose rally car based on the European Corolla 3 door Hatchback, and powered by a modified 3S-GTE engine and 4WD system from the Toyota Celica GT-Four ST205.

It was launched in July 1997, and made its debut in the 1997 Rally of Finland with 1994 World Rally Champion, Didier Auriol, and Marcus Grönholm behind the wheel.

For 1998 WRC season, double World Rally Champions Carlos Sainz and Luis Moya joined the Toyota Team Europe, and won the 1998 Monte Carlo Rally. It was the first victory for 
the Corolla WRC. Didier Auriol won the 1999 China Rally, and Toyota won the 1999 manufacturer's title while the company stopped participating in rallying, in order to prepare for a 
switch to Formula One in 2002.

Image Link: https://upload.wikimedia.org/wikipedia/commons/e/eb/Toyota_Corolla_WRC_01.jpg`)
}
	 if(cmd === `${prefix}a4`){
   return message.channel.send(`
**Overview**
Production: 2015–present
Model years: 2016–present
Designer: Frank Rimili
Ruediger Mueller (interior)

**Body and chassis**

Body style: 4-door saloon/sedan,
5-door Avant (estate/wagon)
Platform: Volkswagen Group B9 (MLB/MLP) platform
Related: 
Audi A5
Audi Q7

**Powertrain**

Engine:	
Inline-four petrol engine
V6 petrol engine
Inline-four diesel engine
V6 diesel engine
Transmission: 6-speed manual
7-speed S-tronic
8-speed Tiptronic

**Dimensions**

Wheelbase: 2,820 mm (111.0 in)
Length: 4,726 mm (186.1 in)
Width: 1,842 mm (72.5 in)
Height: 1,427 mm (56.2 in)

Image Link: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Audi_A4_Avant_2.0_TFSI_quattro.jpg/1024px-Audi_A4_Avant_2.0_TFSI_quattro.jpg`);
}
	 if(cmd === `${prefix}w8`){
   return message.channel.send(`
**Overview**

Manufacturer: Vector Aeromotive Corporation
Also called: Vector W8 Twin-Turbo
Production: 
1989–1993
22 produced
Model years: 1990–1993
Assembly: Wilmington, Los Angeles, California
Designer: Gerald Wiegert
David Kostka

**Body and chassis**

Class: Sports car (S)
Body style: 2-door coupé
Layout: Rear transverse mid-engine, rear-wheel drive
Platform: Carbon fiber and Kevlar body panels bonded on an aluminum honeycomb monocoque

**Powertrain**

Engine: 6.0 L Rodeck twin-turbocharged V8
Transmission: 3-speed General Motors Turbo-Hydramatic 425 automatic

**Dimensions**

Wheelbase: 103.0 in (2,616 mm)
Length: 172.0 in (4,369 mm)
Width: 76.0 in (1,930 mm)
Height: 42.5 in (1,080 mm)
Curb weight: 1,506 kg (3,320 lb) (est.)

**Chronology**

Predecessor: Vector W2
Successor: Vector WX-3

Image Link: https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/VectorW8.jpg/1024px-VectorW8.jpg`);
}
	 if(cmd === `${prefix}impreza`){
   return message.channel.send(`
**Overview**

Production: 
2016–present
2017–present (XV)

**Body and chassis**

Body style: 
4-door sedan (GK)
5-door hatchback (GT)
Platform: Subaru Global Platform

**Powertrain**

Engine: 
1.6 L H4 (gasoline)
2.0 L DAVCS 152 hp (113 kW) H4 (gasoline)
Transmission: 5-speed manual
6-speed manual (XV)
CVT automatic

**Dimensions**

Wheelbase: 2,670 mm (105.1 in)
Length: Sedan (4,625 mm (182.1 in))
Hatchback (4,460 mm (175.6 in))
XV (4,465 mm (175.8 in))
Width: 1,775 mm (69.9 in)
XV (1,800 mm (70.9 in))
Height: Sedan (1,455 mm (57.3 in))
Hatchback (1,480 mm (58.3 in))
XV (1,615 mm (63.6 in))
Curb weight: 1,386–1,433 kg (3,056–3,159 lb)

Image Link: https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/2017_Subaru_Impreza_%28GT7%29_2.0i-S_hatchback_%282018-08-06%29_01.jpg/1024px-2017_Subaru_Impreza_%28GT7%29_2.0i-S_hatchback_%282018-08-06%29_01.jpg`);
}
	 if(cmd === `${prefix}eclipse`){
   return message.channel.send(`
**Overview**

Production:	
2005-2011
2007-2011 (Spyder)
Model years: 
2006-2012
2007-2012 (Spyder)
Assembly: United States: Normal, Illinois (Diamond-Star Motors)

**Body and chassis**

Body style: 
2-door convertible
2-door coupe
Layout: FF layout
Platform: Mitsubishi PS platform
Related: 
Mitsubishi Endeavor
Mitsubishi Galant

**Powertrain**

Engine: 
2.4 L 162 hp (121 kW) 4G69 I4
3.8 L 263 hp (196 kW) 6G75 V6
Transmission: 4-speed automatic (F4A4B)
5-speed automatic (F4A5A)
5-speed manual
6-speed manual

**Dimensions**

Wheelbase: 2,576 mm (101.4 in)
Length: 2006-08 (4,564 mm (179.7 in))
2009-2011 (4,583 mm (180.4 in))
Width: 1,834 mm (72.2 in)
Height: 2006-2010 (1,359 mm (53.5 in))
2006–2010 Spyder (1,382 mm (54.4 in))
2006–2010 GT Spyder (1,389 mm (54.7 in))
2011 (1,351 mm (53.2 in))
2011 Spyder (1,375 mm (54.1 in))
Curb weight: 2.4 coupe (1,485 kg (3,274 lb))
V6 coupe (1,575 kg (3,472 lb))
2.4 convertible (1,575 kg (3,472 lb))
V6 convertible (1,665 kg (3,671 lb))

Image Link: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/4th-Mitsubishi-Eclipse-convertible.jpg/1024px-4th-Mitsubishi-Eclipse-convertible.jpg`);
}
	 if(cmd === `${prefix}gt40`){
   return message.channel.send(`
**Overview**

Manufacturer: Ford Advanced Vehicles
John Wyer Automotive Engineering
Kar Kraft
Shelby American
Production: 
1964-1969
105 produced
Assembly: 
Slough, UK (Mk I, Mk II, and Mk III)
Wixom, Michigan, United States (Mk IV)

**Body and chassis**

Class:	
Group 4 sports car
Group 6 sports prototype
Body style:	
Coupé
Roadster

**Powertrain**

Engine: 4181 cc (255 CID) V-8
4737 cc (289 CID) V-8
6997 cc (427 CID) V-8
4942 cc (302 CID) V-8
Transmission: 5-speed manual

**Dimensions**

Wheelbase: 95 in (2,413 mm)
Length: 160 in (4,064 mm)
Width: 70 in (1,778 mm)
Height: 40.5 in (1,029 mm)
Curb weight: 2,682 lb (1,217 kg) (1966, Mk IIA)

**Chronology**

Successor: Ford P68 (racing heritage)
Ford GT (street heritage)

Image Link: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/GT40_at_Goodwood.jpg/1024px-GT40_at_Goodwood.jpg`);
}
	 if(cmd === `${prefix}s2k`){
   return message.channel.send(`
**Overview**

Production: 1999–2003
Assembly: Takanezawa R&D Plant, Takanezawa, Tochigi, Japan

**Body and chassis**

Class: Sports car, Roadster
Body style: 2-door convertible

**Powertrain**

Engine: 2.0L I-4 F20C
Transmission: 6-speed manual

**Dimensions**

Wheelbase: 2,400 mm (94.5 in)
Length: 4,120 mm (162.2 in)
Width: 1,750 mm (68.9 in)
Height: 1,285 mm (50.6 in)
Curb weight: 1,274 kg (2,809 lb)

Image Link: https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/HondaS2000-004.jpg/1280px-HondaS2000-004.jpg`);	 
}
});

bot.login(botconfig.token);
