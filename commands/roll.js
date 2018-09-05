const discord = require("discord.js");

module.exports.run = (client, message, sides) => {
    if (sides.length < 1) { sides = 100; }
    if (sides === 0) { return message.channel.send("You can't roll from 0!"); }

    if (Number.isInteger(Number(sides))) {
        var y = Math.floor(Math.random() * (Math.floor(sides) - Math.ceil(1) + 1)) + Math.ceil(1);
        return message.channel.send(`🎲 You rolled a ${y}! 🎲`);
    } else {
        return message.channel.send("That's an invalid number. Please try again!");
    }
 };

module.exports.help = {
    name: "roll",
};
