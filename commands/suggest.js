const Discord = require("discord.js");
const Report = require("../models/suggest.js")
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://404:404-2409@404bot-3efij.mongodb.net/test?retryWrites=true/suggestions');

module.exports.run = async (bot, message, args) => {
  await message.delete();
  let suggestion = args.slice(0).join(" ");
  if (!suggestion) return message.reply("Please enter a valid suggestion!");

  const report = new Report({
    _id: mongoose.Types.ObjectId(),
    username: rUser.user.username,
    userID: rUser.id,
    suggestion: suggestion,
    time: message.createdAt
  });

  report.save()
  .then(result => console.log(result))
  .catch(err => console.log(err));

  message.reply("That suggestion has been saved to the database, thank you!")

}

module.exports.help = {
  name: "suggest"
}
