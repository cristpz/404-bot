const discord = require("discord.js");

module.exports.run = async (client, msg, [question, ...option]) => {
    if (!question) { return msg.reply("You need to provide a question."); }
    else if (option.length < 2) { return msg.reply("You need to provide at least two options!"); }
    else if (option.length > 25) { return msg.reply("You have a giant list of options, I can't handle these!"); }

    var emote = ["✅", "❎", "☑", "✔", "❌", "✖", "⭕", "🔘"];

    msg.delete().catch();
    const embed = new client.methods.Embed()
        .setColor("#3a0be7")
        .setTimestamp()
        .setDescription(`A poll has been started by ${message.author}!`)
        .addField("Question: ", `${question}`);

    for (var x = 0; x < option.length; x++) { embed.addField(`Option ${x + 1} - ${emote[x]}:`, option[x]); }

    const message = await msg.channel.send({embed});
    for (var x = 0; x < option.length; x++) { message.react(emote[x]); }
};

module.exports.help = {
    name: "poll",
};
