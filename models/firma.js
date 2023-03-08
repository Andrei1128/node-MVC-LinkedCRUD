const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

const firmaSchema = new mongoose.Schema({
  nume: { type: String },
  angajati: [{ type: mongoose.Schema.ObjectId, ref: "angajat" }],
});
const firma = mongoose.model("firma", firmaSchema);

module.exports = firma;
