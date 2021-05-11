const express = require("express");

const routes = require("./routes");

const app = express();

app.use(express.static("dist"));
app.use("/api", routes);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
