'use strict';

var _ = require('lodash');
var Income = require('./income.model');

// Get list of incomes
exports.index = function(req, res) {
  Income.find(function (err, incomes) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(incomes);
  });
};

// Get a single income
exports.show = function(req, res) {
  Income.findById(req.params.id, function (err, income) {
    if(err) { return handleError(res, err); }
    if(!income) { return res.status(404).send('Not Found'); }
    return res.json(income);
  });
};

// Creates a new income in the DB.
exports.create = function(req, res) {
  Income.create(req.body, function(err, income) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(income);
  });
};

// Updates an existing income in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Income.findById(req.params.id, function (err, income) {
    if (err) { return handleError(res, err); }
    if(!income) { return res.status(404).send('Not Found'); }
    var updated = _.merge(income, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(income);
    });
  });
};

// Deletes a income from the DB.
exports.destroy = function(req, res) {
  Income.findById(req.params.id, function (err, income) {
    if(err) { return handleError(res, err); }
    if(!income) { return res.status(404).send('Not Found'); }
    income.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}