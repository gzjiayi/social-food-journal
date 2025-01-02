const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

// Load the built in middleware function express.json() to parse JSON data
// from the req and attach it to req.body
app.use(express.json());
app.get("/meals", (req, res) => {
  res.json({ message: "placeholder for GET /meals" });
});

app.post("/meals", (req, res) => {
  res.json({ message: "placeholder for POST /meals", data: req.body });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
