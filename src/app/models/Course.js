const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema({
  title: { type: String, maxLength: 255},
  desctiption: { type: String, maxLength: 600},
  image: { type: String, maxLength: 255},
  createAt: {type: Date, default: Date.now},
  upDateAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model("Course", Course)


