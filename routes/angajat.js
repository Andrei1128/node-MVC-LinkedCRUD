const express = require("express");
const router = express.Router();
const { validateAngajat } = require("../middleware/validators");

const {
  getAngajat,
  updateAngajat,
  deleteAngajat,
} = require("../controllers/angajat");

router.get("/:idFirma/:id", getAngajat);
router.put("/:idFirma/:id", validateAngajat, updateAngajat);
router.delete("/:idFirma/:id", deleteAngajat);

module.exports = router;
