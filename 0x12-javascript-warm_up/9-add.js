#!/usr/bin/node
/* script that prints the addition of 2 integers */
const a = process.argv[2];
const b = process.argv[3];
function add (a, b) {
  if (isNaN(a) || isNaN(b)) {
    return (NaN);
  } else {
    return (parseInt(a) + parseInt(b));
  }
}
console.log(add(a, b));
