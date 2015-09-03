'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
  description: String,
  category: String,
  date:{type:Date, default: Date.now},
  amount: Number
  /*active: Boolean*/
});

module.exports = mongoose.model('Expense', ExpenseSchema);
