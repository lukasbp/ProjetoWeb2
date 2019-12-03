const Category = require('./Category');

exports.index = (req, res) => {
  Category.get((err, categories) => {
    if (err) {
      return res.status(500).json();
    }
    return res.status(200).json({
      data: categories,
    });
  });
};

exports.new = (req, res) => {
  const category = new Category();
  category.nome = req.body.name;
  category.save(err => {
    if (err) {
      return res.status(500).json();
    }
    return res.status(200).json(category);
  });
};

exports.delete = (req, res) => {
  Category.findById(req.params.id, (err, category) => {
    if (err) {
      return res.status(404).json();
    }
    category.remove();
    return res.status(200).json();
  });
};

exports.view = (req, res) => {
  Category.findById(req.params.id, (err, category) => {
    if (err) {
      return res.status(404).json();
    }
    return res.status(200).json(category);
  });
};
