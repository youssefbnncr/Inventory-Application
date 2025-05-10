const pool = require("./pool");

const addCategory = async (categoryName) => {
  await pool.query("INSERT INTO categories (name) VALUES ($1)", [categoryName]);
};

const getCategories = async (categoryId) => {
  const result = await pool.query("SELECT * FROM categories");
  return result;
};

module.exports = {
  addCategory,
  getCategories,
};
