const angajat = require("../models/angajat");

const getAngajat = async (req, res) => {
  const angajatGasit = await angajat.findById(req.params.id);
  res.render("templates/editAngajat.ejs", {
    angajat: angajatGasit,
    idFirma: req.params.idFirma,
  });
};
const updateAngajat = async (req, res) => {
  await angajat.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/firme/" + req.params.idFirma);
};
const deleteAngajat = async (req, res) => {
  await angajat.findByIdAndDelete(req.params.id);
  res.redirect("/firme/" + req.params.idFirma);
};

module.exports = {
  getAngajat,
  updateAngajat,
  deleteAngajat,
};
