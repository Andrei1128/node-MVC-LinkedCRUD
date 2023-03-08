const express = require("express");
const router = express.Router();

const {
  getAngajat,
  updateAngajat,
  deleteAngajat,
} = require("../controllers/angajat");
const { validateAngajat } = require("../middleware/validators");

router.get("/:idFirma/:id", getAngajat);
router.put("/:idFirma/:id", updateAngajat);
router.delete("/:idFirma/:id", deleteAngajat);

module.exports = router;
