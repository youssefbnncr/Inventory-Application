const db = require("../model/queries");

const getHome = (req, res) => {
  res.render("index");
};
const getAddCategory = async (req, res) => {
  const categories = await db.getCategories();
  console.log(categories[0].name);
  res.render("addCategory", { error: [] });
};
const addCategory = async (req, res) => {
  const { category_name } = req.body;
  await db.addCategory(category_name);
  res.redirect("/");
  return;
};

module.exports = {
  getHome,
  getAddCategory,
  addCategory,
};
