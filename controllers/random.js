 'use strict'
 module.exports.math = (req, res) => {
  res.send(Math.random().toString());
};

module.exports.params = (req, res) => {
  const min = req.params.min;
  const max = req.params.max;

  res.send(getRandomInt(+min, +max).toString());
};

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
