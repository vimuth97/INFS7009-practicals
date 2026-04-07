const express = require("express");
const app = express();

app.get("/joke", async (req, res) => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const { value } = await response.json();
    res.send(value);
  } catch (err) {
    res.status(500).send("Failed to fetch joke.");
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
