const express = require("express");
const router = express.Router();

const {
  getAngajat,
  getAngajati,
  updateAngajat,
  deleteAngajat,
  addAngajat,
} = require("../controllers/angajat");
const { validateAngajat } = require("../middleware/validators");

router.get("/", getAngajati);
router.get("/:id", getAngajat);
router.post("/", addAngajat);
router.put("/:id", updateAngajat);
router.delete("/:id", deleteAngajat);

module.exports = router;
