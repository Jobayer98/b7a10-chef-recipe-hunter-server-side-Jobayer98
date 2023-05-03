const express = require("express");
const cors = require("cors");

const recipeRouter = require("./routes/recipe");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(recipeRouter);
app.use("/", (req, res) => {
  res.send({ greet: "Welcome to server" });
});

app.use((error, req, res, next) => {
  res.status(404).send({ message: "404 Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
