// gestion des imports de modules externes
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const dotenv = require("dotenv").config();
const helmet = require("helmet");

// définition de routes
const sauceRoute = require("./routes/saucesRoute");
const userRoute = require("./routes/user");

app.use(express.json());
mongoose.set("strictQuery", true);

// connexion avec la base de donnée
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@${process.env.HOST}/${process.env.DB_NAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/images", express.static(path.join(__dirname, "images")));
app.use(helmet());

app.use("/api/sauces", sauceRoute);
app.use("/api/auth", userRoute);

module.exports = app;
