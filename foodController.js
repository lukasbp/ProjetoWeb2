const Food = require('./Food');
const Category = require('./Category');

exports.index = (req, res) => {
  Food.get((err, foods) => {
    if (err) {
      return res.status(500).json();
    }
    return res.status(200).json({
      data: foods,
    });
  });
};

exports.new = (req, res) => {
  Category.findById(req.body.category, (err, category) => {
    if (err) {
      return res.status(404).json();
    }
    const food = new Food();
    food.nome = req.body.name;
    food.descricao = req.body.description;
    food.preco = req.body.price;
    food.categoria = category._id;
    food.save(err => {
      if (err) {
        return res.status(500).json();
      }
      return res.status(200).json(food);
    });
  });
};

exports.delete = (req, res) => {
  Food.findById(req.params.id, (err, food) => {
    if (err) {
      return res.status(404).json();
    }
    food.remove();
    return res.status(200).json();
  });
};

exports.view = (req, res) => {
  Food.findById(req.params.id, (err, food) => {
    if (err) {
      return res.status(404).json();
    }
    return res.status(200).json(food);
  });
};

exports.edit = (req, res) => {
  Food.findById(req.params.id, (err, food) => {
    if (err) {
      return res.status(404).json();
    }
    Category.findById(req.body.category, (err2, category) => {
      if (err2) {
        return res.status(404).json();
      }
      food.nome = req.body.name;
      food.descricao = req.body.description;
      food.preco = req.body.price;
      food.categoria = category;
      food.save(err => {
        if (err) {
          return res.status(500).json();
        }
        return res.status(200).json(food);
      });
    });
  });
};
