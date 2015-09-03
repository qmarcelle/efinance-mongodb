'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IncomeSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Income', IncomeSchema);