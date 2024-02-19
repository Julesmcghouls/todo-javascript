let add = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let sum = add.pop();
console.log(sum); // 10

if (add.length > 0) {
sum += add.pop();
  console.log(sum); // 19
}

add.push(10, 20, 30, 40, 50);
console.log(add); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50]

let sum2 = add.pop();
console.log(sum2); // 50


// Path: script.js

