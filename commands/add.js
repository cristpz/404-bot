exports.run = async (client, message, [x, y, z]) => {
  if (!x || !y) { return message.channel.send("You need two numbers to add."); }
  x === client.funcs.constantMath(client, message, x);
  y === client.funcs.constantMath(client, message, y);

  if (!z) { z = "0"; }
  else { z = client.funcs.constantMath(client, message, z); }

  if ((x === null) || (y === null) || (z === null)) { return message.reply("You are trying to add things that aren't numbers? Well no."); }

  message.channel.send(`Total: ${Number(x) + Number(y) + Number(z)}`);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "add",
  description: "Add up to three numbers together.",
  usage: "[x:str] [y:str] [z:str]",
  usageDelim: " ",
};
