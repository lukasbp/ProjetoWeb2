const mongoose = require('mongoose');

const Category = mongoose.model(
  'Category',
  new mongoose.Schema({
    nome: String,
  })
);

module.exports = Category;

module.exports.get = (cb, lmt) => {
  Category.find(cb).limit(lmt);
};
