const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // Limite chaque IP à100 requêtes par `window` (ici, toutes les 5 minutes)
  message: "Trop de tentatives de connexion, réessayez dans 5 minutes",
});

module.exports = { limiter };
