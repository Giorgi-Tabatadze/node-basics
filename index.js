const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(req.stack);
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
  console.log(`app listening at the port:${PORT}`);
});
