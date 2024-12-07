const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("Hello, Backend is running!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
