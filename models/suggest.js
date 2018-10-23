const mongoose = require("mongoose");
const suggestionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  userID: String,
  suggestion: String,
  time: String
});

module.exports = mongoose.model("Suggestion", suggestionSchema);
