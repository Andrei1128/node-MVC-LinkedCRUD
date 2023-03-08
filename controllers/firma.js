const firma = require("../models/firma");
const angajat = require("../models/angajat");

const getFirma = async (req, res) => {
  const firmaGasita = await firma.findById(req.params.id);
  res.render("templates/firma.ejs", { firma: firmaGasita });
};
const getFirme = async (req, res) => {
  const firme = await firma.find({}).populate("angajati");
  console.log(firme);
  res.render("templates/firme.ejs", { firme });
};
const addFirma = async (req, res) => {
  const firmaNoua = new firma(req.body);
  await firmaNoua.save();
  res.redirect("/firme");
};
const addAngajat = async (req, res) => {
  const angajatNou = new angajat(req.body);
  await angajatNou.save();
  const firmaGasita = await firma.findById(req.params.id);
  firmaGasita.angajati.push(angajatNou);
  await firmaGasita.save();
  res.redirect("/firme");
};
const updateFirma = async (req, res) => {
  await firma.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/firme");
};
const deleteFirma = async (req, res) => {
  await firma.findByIdAndDelete(req.params.id);
  res.redirect("/firme");
};

module.exports = {
  getFirma,
  getFirme,
  addFirma,
  updateFirma,
  deleteFirma,
  addAngajat,
};
