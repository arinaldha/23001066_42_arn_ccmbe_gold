const express = require("express");
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const HomeRoute = require("./routes/HomeRoute");

app.get("/", HomeRoute);
app.use("/login", HomeRoute);
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
