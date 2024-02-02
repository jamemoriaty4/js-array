const arr = [1, 2, 3, 4, 45, 2, 324, 4, 523, 3];
function check(arr) {
  let small = 1;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      continue;
    }
    if (arr[i] === small) {
      small++;
    } else if (arr[i] > small) {
      return small;
    }
  }
  return small;
}

console.log(check(arr));
