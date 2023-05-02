const express = require("express");
const {
  getChefById,
  getChefs,
  getCategoryByName,
  getRecipes,
  getRecipeById,
} = require("../utils");

const router = express.Router();

router.get("/chefs", (req, res) => {
  const chefs = getChefs();
  res.send(chefs);
});

router.get("/chefs/:chefId", (req, res) => {
  const chef = getChefById(req.params.chefId);

  if (!chef) {
    return res.status(404).send({ message: "Could not find data" });
  }

  res.send(chef);
});

router.get("/categories/:catId", (req, res) => {
  const category = getCategoryByName(req.params.catId);

  if (!category) {
    return res.status(404).send({ message: "Could not find data" });
  }

  res.send(category);
});

router.get("/recipes", (req, res) => {
  const recipes = getRecipes();
  res.send(recipes);
});

router.get("/recipes/:recipeId", (req, res) => {
  const recipe = getRecipeById(req.params.recipeId);

  if (!recipe) {
    return res.status(404).send({ message: "Could not find data" });
  }

  res.send(recipe);
});
module.exports = router;
