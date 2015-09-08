'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IncomeSchema = new Schema({
  description: String,
  category: String,
  date:{type:Date, default: Date.now},
  amount: Number
});

module.exports = mongoose.model('Income', IncomeSchema);
