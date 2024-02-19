let add = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let sum = add.pop();
console.log(sum); // 10

if (add.length > 0) {
sum += add.pop();
  console.log(sum); // 19
}
