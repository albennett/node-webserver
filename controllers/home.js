'use strict';
const News = require('../models/news');

module.exports.findNews = (req, res) => {
  News.findOne().sort('-_id').exec((err, doc) => {
    if (err) throw err;
    doc = doc || {top: ['']};

    res.render('index', {
      date: new Date(),
      topStory: doc.top[0]
    });
  });
};
