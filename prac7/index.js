const arr = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
function test(arr, k) {
  let cursum = 0;
  let start = 0;
  let end = 0;
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    cursum += arr[i];
    if (cursum === k) {
      end = i;
      break;
    }
    if (cursum > k) {
      while (cursum > k && start < i) {
        cursum -= arr[start];
        start++;
      }
      if (cursum === sum) {
        end = i;
        break;
      }
    }
  }
  if (end !== -1) {
    array = arr.slice(start, end + 1);
    console.log(array);
  } else {
    console.log("ktm");
  }
}
let x = prompt();
test(arr, x);
