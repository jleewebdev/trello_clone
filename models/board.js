var mongoose = require('mongoose');

// Board Schema
var boardSchema = mongoose.Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

var Board = module.exports = mongoose.model('Board', boardSchema);

