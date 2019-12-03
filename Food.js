const mongoose = require('mongoose');

const Food = mongoose.model(
  'Food',
  new mongoose.Schema({
    nome: String,
    descricao: String,
    preco: Number,
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  })
);

module.exports = Food;

module.exports.get = (cb, lmt) => {
  Food.find(cb).limit(lmt);
};
