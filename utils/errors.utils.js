module.exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };
  if (err.message.includes("pseudo"))
    errors.pseudo = "Pseudo incorrect ou déjà pris";

  if (err.message.includes("email")) errors.email = "Email incorect";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit contenir au minimum 6 carractères";

  if (err.code == 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Email déjà enregistré";

  if (err.code == 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "Pseudo déjà enregistré";

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };
  if (err.message.includes("email")) errors.email = "Email inconnu";

  if (err.message.includes("password"))
    errors.password = "Mot de pass Incorrect";

  return errors;
};

module.exports.uploadErrors = (err) => {
  let errors = { format: "", maxSize: "" };

  if (err.message.includes("invalid file"))
    errors.format = "Format incorrect";

  if (err.message.includes("max size"))
    errors.maxSize = "Taille maximale dépassée (500ko)";

  return errors;
};
