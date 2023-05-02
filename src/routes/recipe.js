const express = require("express");
const { getChefById, getChefs } = require("../utils");

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

module.exports = router;
