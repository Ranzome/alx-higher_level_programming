#!/usr/bin/node
/* script that searches the second biggest integer in the list */
const args = process.argv.slice(2);
let nextMax = 0;

if (args.length > 1) {
  const integers = args.map(Number);
  integers.sort((a, b) => b - a);
  nextMax = integers[1];
}

console.log(nextMax);
