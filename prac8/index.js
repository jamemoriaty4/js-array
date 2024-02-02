const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 6];
function check(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i && array.indexOf(arr[i]) !== -1) {
      array.push(arr[i]);
    }
  }
  console.log(array);
}

check(arr);
