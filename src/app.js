const express = require("express");
const recipeRouter = require("./routes/recipe");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(recipeRouter);

app.use((error, req, res, next) => {
  res.status(400).send({ message: "Something went wrong" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
