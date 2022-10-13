#!/usr/bin/node
let array = [];
if (!isNaN(process.argv[3])) {
  for (let i = 2; i < process.argv.length; i++) {
    array[i - 2] = (process.argv[i]);
  }
  array.sort(function (a, b) { return b - a; });
  console.log(array[1]);
} else {
  console.log(0);
}
