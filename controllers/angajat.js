const angajat = require("../models/angajat");

const getAngajat = async (req, res) => {
  const angajatGasit = await angajat.findById(req.params.id);
  res.render("templates/angajat.ejs", { angajat: angajatGasit });
};
const getAngajati = async (req, res) => {
  const angajati = await angajat.find({});
  res.render("templates/angajati.ejs", { angajati });
};
const addAngajat = async (req, res) => {
  if (validator(req.body)) {
    const angajatNou = new angajat(req.body);
    await angajatNou.save();
  }
  res.redirect("/angajati");
};
const updateAngajat = async (req, res) => {
  if (validator(req.body))
    await angajat.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/firme");
};
const deleteAngajat = async (req, res) => {
  await angajat.findByIdAndDelete(req.params.id);
  res.redirect("/firme");
};

module.exports = {
  getAngajat,
  getAngajati,
  addAngajat,
  updateAngajat,
  deleteAngajat,
};
