const express = require("express");
const { generateFitnessPlan } = require("./formaai");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/fitness-schedule", generateFitnessPlan );

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
