const chefsData = require("../fakedb/chefs.json");
const categoryData = require("../fakedb/categories.json");
const recipeData = require("../fakedb/recipes.json");

const getChefs = () => {
  return chefsData;
};

const getChefById = (id = 2) => {
  const chefInfo = chefsData.find((chef) => chef.id == id);
  return chefInfo;
};

const getCategoryByName = (id) => {
  const findCatData = categoryData.find((cat) => cat.id == id);
  return findCatData;
};

const getRecipes = () => {
  return recipeData;
};

const getRecipeById = (id) => {
  const recipeInfo = recipeData.find((recipe) => recipe.id == id);
  return recipeInfo;
};

module.exports = {
  getChefs,
  getChefById,
  getCategoryByName,
  getRecipes,
  getRecipeById,
};
