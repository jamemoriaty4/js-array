let a = +prompt("nhap vao so thu nhat: ");
let b = +prompt("nhap vao so thu hai: ");

function print(x, y) {
  let arr = [];
  for (let i = 1; i <= x; i++) {
    if (i % b === 0) {
      arr.push(i);
    }
  }
  for (let i = 1; i <= b; i++) {
    if (i % a === 0) {
      arr.push(i);
    }
  }
  console.log(arr);
}

print(a, b);
