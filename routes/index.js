const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
require('../models/Keyboard');
const Keyboard = mongoose.model('keyboards');

router.get('/', (req, res) => {
  Keyboard.find({})
    .sort({ size: 1 })
    .exec((err, keyboards) => {
      res.json(keyboards);
    });
});

router.post('/', (req, res) => {
  let keyboard = new Keyboard(req.body);
  keyboard.save();
  res.send(keyboard);
});

router.get('/:keyboardId', (req, res) =>
  Keyboard.findById(req.params.keyboardId, (err, keyboard) => {
    res.json(keyboard);
  })
);

router.get('/size/:keyboardSize', (req, res) =>
  Keyboard.find({ size: req.params.keyboardSize }, (err, keyboards) => {
    res.json(keyboards);
  })
);

router.patch('/:keyboardId', (req, res) =>
  Keyboard.findById(req.params.keyboardId, (err, keyboard) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (e in req.body) {
      keyboard[e] = req.body[e];
    }
    keyboard.save();
    res.json(keyboard);
  })
);

router.delete('/:keyboardId', (req, res) =>
  Keyboard.findById(req.params.keyboardId, (err, keyboard) => {
    keyboard.remove();
    res.send(keyboard);
  })
);

module.exports = router;
