const express = require("express");
const router = express.Router();
const { validateAngajat, validateFirma } = require("../middleware/validators");

const {
  getFirma,
  getFirme,
  updateFirma,
  deleteFirma,
  addFirma,
  addAngajat,
  getAddAngajat,
} = require("../controllers/firma");

router.get("/", getFirme);
router.get("/:id", getFirma);
router.get("/:id/add", getAddAngajat);
router.post("/", validateFirma, addFirma);
router.post("/:id/add", validateAngajat, addAngajat);
router.put("/:id", validateFirma, updateFirma);
router.delete("/:id", deleteFirma);

module.exports = router;
