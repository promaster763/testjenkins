const express = require("express");

const app = express();
console.log("abc");
app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(4000, () => {
  console.log("Server running");
});
