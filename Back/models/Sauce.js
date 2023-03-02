const mongoose = require("mongoose");

// schema des sauces dans la base de donnée
const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, default: 0 }, //valeur par défaut à 0
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: [String], default: [] }, //est dans un array
  usersDisliked: { type: [String], default: [] }, // est dans un array
});

module.exports = mongoose.model("Sauce", sauceSchema);
