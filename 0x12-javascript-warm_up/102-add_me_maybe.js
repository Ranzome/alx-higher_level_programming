#!/usr/bin/node
/* Write a function that increments and calls */
exports.addMeMaybe = function (number, theFunction) {
  theFunction(++number);
};
