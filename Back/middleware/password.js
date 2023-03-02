const passwordValidator = require("password-validator");
const passwordSchema = new passwordValidator();

//contraintes imposées pour que le mot de passe soit valide
passwordSchema
  .is()
  .min(5) // longueur mini 8
  .is()
  .max(30) // longueur maxi 100
  .has()
  .uppercase() // doit contenir des majuscules
  .has()
  .lowercase() // doit contenir des minuscules
  .has()
  .digits(1) // doit contenir au moins 1 chiffre
  .has()
  .not()
  .spaces() // ne doit pas avoir d'espace
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]); // ne doit pas être ces mots de passe

module.exports = (req, res, next) => {
  if (passwordSchema.validate(req.body.password)) {
    next(); //mot de passe validé s'il répond aux contraintes du schema
  } else {
    return res.status(400).json({
      error: `Le mot de passe n'est pas assez fort ${passwordSchema.validate(
        "req.body.password",
        { list: true } //le mot de passe ne répond pas aux contraintes du schema
      )}`,
    });
  }
};
