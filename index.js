const express = require("express");
const app = express();
const port = process.env.PORT;
const bodyParser = require("body-parser");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const HomeRoute = require("./routes/HomeRoute");
const MasterClassRoute = require("./routes/master/MasterClassRoute");
const MasterUserRoute = require("./routes/master/MasterUserRoute");
const MasterLevelRoute = require("./routes/master/MasterLevelRoute");

app.get("/", HomeRoute);
app.use("/login", HomeRoute);

/**
 * Master Data Routes
 */
app.use("/master-class", MasterClassRoute);
app.use("/master-user", MasterUserRoute);
app.use("/master-level", MasterLevelRoute);
/**
 * End of Master Data Routes
 */
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
