// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const eventRoutes = require('./routes/eventRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", eventRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
