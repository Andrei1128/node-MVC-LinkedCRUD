module.exports.validateAngajat = (req, res, next) => {
  if (
    req.body.nume.length >= 3 &&
    req.body.prenume.length >= 3 &&
    req.body.email.length >= 8 &&
    req.body.salariu >= 0 &&
    req.body.data.length >= 8
  )
    next();
  else res.status(400).send("Eroare");
};
module.exports.validateFirma = (req, res, next) => {
  if (req.body.nume.length >= 6) next();
  else res.status(400).send("Eroare");
};
