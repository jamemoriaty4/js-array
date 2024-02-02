const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function dapnguoc(x) {
  let array = [];
  for (let i = x.length - 1; i >= 0; i--) {
    array.push(x[i]);
  }
  console.log(array);
}
