require("dotenv").config();
const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const PORT = process.env.PORT;

app.engine("ejs", ejsMate);
app.set("views", __dirname + "/views");
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/angajati", require("./routes/angajat"));
app.use("/firme", require("./routes/firma"));

app.get("/", (req, res) => {
  res.redirect("/firme");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});
