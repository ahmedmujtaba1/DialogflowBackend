const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Saylani Mass It Training");
});

app.get("/about", (req, res) => {
  res.send('Hello to "/about" path ');
});

app.get("/contact", (req, res) => {
    res.send('Hello to "/contact" path ');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
