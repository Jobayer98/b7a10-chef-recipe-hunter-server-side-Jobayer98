const chefsData = require("../fakedb/chefs.json");

const getChefs = () => {
  return chefsData;
};

const getChefById = (id = 2) => {
  const chefInfo = chefsData.find((chef) => chef.id == id);
  return chefInfo;
};

module.exports = {
  getChefs,
  getChefById,
};
