const express = require("express");
const router = express.Router();

const {
  getFirma,
  getFirme,
  updateFirma,
  deleteFirma,
  addFirma,
  addAngajat,
} = require("../controllers/firma");

router.get("/", getFirme);
router.get("/:id", getFirma);
router.post("/", addFirma);
router.post("/:id", addAngajat);
router.put("/:id", updateFirma);
router.delete("/:id", deleteFirma);

module.exports = router;
