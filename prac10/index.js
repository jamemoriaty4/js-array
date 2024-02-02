const arr1 = [1, 2, 3, 4, 5];
const arr2 = [-3, -1, 0, 1, 5];
const arr3 = [1, 5, 6, 7];

function check(arr1, arr2, arr3) {
  let i = 0;
  let j = 0;
  let k = 0;
  let array = [];
  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      array.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++;
    }
  }
  console.log(array);
}

check(arr1, arr2, arr3);
