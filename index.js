const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

mongoose.connect('mongodb://localhost:27017/teste', {
  useNewUrlParser: true,
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.set('view engine', 'ejs');

const categoryController = require('./categoryController');
const foodController = require('./foodController');

router
  .route('/food')
  .get(foodController.index)
  .post(foodController.new);

router
  .route('/food/:id')
  .delete(foodController.delete)
  .get(foodController.view);

router
  .route('/category')
  .get(categoryController.index)
  .post(categoryController.new);

router
  .route('/category/:id')
  .delete(categoryController.delete)
  .get(categoryController.view);

app.get('/', (req, res) => {
  res.render('category/index.ejs');
});

app.get('/category/create', (req, res) => {
  res.render('category/create.ejs');
});

app.get('/', (req, res) => {
  res.render('food/index.ejs');
});

app.get('/food/create', (req, res) => {
  res.render('food/create.ejs');
});

app.use('/api', router);

app.listen(3000, () => {});
