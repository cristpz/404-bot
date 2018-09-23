const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
return message.channel.send("**Smoking!**").then(async msg => {
                        setTimeout(() => {
                            msg.edit('🚬');
                        }, 500);
                        setTimeout(() => {
                            msg.edit('🚬 ☁ ');
                        }, 700);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁ ');
                        }, 900);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁ ');
                        }, 1000);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁');
                        }, 1100);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁');
                        }, 1200);
                        setTimeout(() => {
                            msg.edit('🚬 ☁');
                        }, 1300);
                        setTimeout(() => {
                            msg.edit(`**weeeeeeeeeeeeeeeeeeeeeeeeeeeeed**`);
                        }, 1500);
                        setTimeout(() => {
                            msg.delete(`**weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed**`);
                        }, 6000);
                    });
                };
module.exports.help = {
  name:"weed"
}
