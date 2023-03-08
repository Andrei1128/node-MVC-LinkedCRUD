module.exports.validateAngajat = (req, res, next) => {
  if (
    req.nume.length >= 3 &&
    req.prenume.length >= 3 &&
    req.email.length >= 8 &&
    req.salariu >= 0 &&
    req.data.length >= 8
  )
    next();
  else res.status(400).send("Eroare");
};
