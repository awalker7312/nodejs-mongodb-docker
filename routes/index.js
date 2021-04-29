var express = require('express');
var router = express.Router();
var { Todos }  = require('../models/todos');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const todos = await Todos.find();
  // {description: 'Install NodeJS', complete: true}
  res.render('index', { title: 'Dockerized NodeJS and MongdoDB Example', todos: todos });
});

module.exports = router;
