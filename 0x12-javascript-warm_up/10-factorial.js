#!/usr/bin/node
/* script that computes and prints */
const a = process.argv[2];
function factorial (a) {
  if (isNaN(a) || a === 1) {
    return (1);
  } else {
    return (a * factorial(a - 1));
  }
}
console.log(factorial(parseInt(a)));
