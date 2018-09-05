const discord = require("discord.js");

module.exports.run = async (client, msg, [user]) => {
    var data = await client.funcs.userSearch(msg, {user: [user], name: this.help.name});
    
    if (data.valid !== false) { 
        client.users.fetch(data.user[0].id).then(avatar => { msg.channel.send("", { files: [avatar.displayAvatarURL()]}); }); 
    }
};
  
module.exports.help = {
    name: "avatar",
};
