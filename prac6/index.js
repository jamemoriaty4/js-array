const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6];

function sapXep(x) {
  let nega = [];
  let pos = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 0) {
      nega.push(x[i]);
    }
  }

  for (let i = 0; i < x.length; i++) {
    if (x[i] >= 0) {
      pos.push(x[i]);
    }
  }

  let newArrray = nega.concat(pos);
}

console.log(sapXep(arr));
