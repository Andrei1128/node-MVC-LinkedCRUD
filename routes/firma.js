const express = require("express");
const router = express.Router();

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
router.post("/", addFirma);
router.post("/:id/add", addAngajat);
router.put("/:id", updateFirma);
router.delete("/:id", deleteFirma);

module.exports = router;
