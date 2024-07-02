#!/usr/bin/node
/* script that prints My number: <first argument converted in integer> */

const arg = process.argv[2];

const convertedNumber = parseInt(arg);

console.log(isNaN(convertedNumber) ? 'Not a number' : 'My number: ' + convertedNumber);
