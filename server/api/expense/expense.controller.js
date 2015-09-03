'use strict';

var _ = require('lodash');
var Expense = require('./expense.model');

// Get list of expenses
exports.index = function(req, res) {
  Expense.find(function (err, expenses) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(expenses);
  });
};

// Get a single expense
exports.show = function(req, res) {
  Expense.findById(req.params.id, function (err, expense) {
    if(err) { return handleError(res, err); }
    if(!expense) { return res.status(404).send('Not Found'); }
    return res.json(expense);
  });
};

// Creates a new expense in the DB.
exports.create = function(req, res) {
  Expense.create(req.body, function(err, expense) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(expense);
  });
};

// Updates an existing expense in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Expense.findById(req.params.id, function (err, expense) {
    if (err) { return handleError(res, err); }
    if(!expense) { return res.status(404).send('Not Found'); }
    var updated = _.merge(expense, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(expense);
    });
  });
};

// Deletes a expense from the DB.
exports.destroy = function(req, res) {
  Expense.findById(req.params.id, function (err, expense) {
    if(err) { return handleError(res, err); }
    if(!expense) { return res.status(404).send('Not Found WTF'); }
    expense.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
