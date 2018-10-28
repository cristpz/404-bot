const discord = require('discord.js');
const ms = require('ms');
module.exports.run = (client, message, args) => {
    if (!client.lockit) client.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
     if(!message.member.hasPermission("MANAGE_CHANNELS")) return errors.noPerms(message, "MANAGE_CHANNELS");
    if (!time) return message.reply('you must set a duration for the lockdown in either hours, minutes or seconds.');

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null,
            READ_MESSAGES: null
        }).then(() => {
            message.channel.sendMessage('**Lockdown over, cheers lads.**');
            clearTimeout(bot.lockit[message.channel.id]);
            delete bot.lockit[message.channel.id];
        }).catch(error => {
            console.log(error);
        });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        }).then(() => {
            message.channel.send(`**Channel locked** for ${ms(ms(time), { long:true })}.`).then(() => {

                bot.lockit[message.channel.id] = setTimeout(() => {
                    message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: null,
                        READ_MESSAGES: null
                    }).then(message.channel.send('**Lockdown over, cheers lads.**')).catch(console.error);
                    delete bot.lockit[message.channel.id];
                }, ms(time));

            }).catch(error => {
                console.log(error);
            });
        });
    }
};


module.exports.help = {
    name: "lockdown"
};
