const array = [4, 5, 6, 7, 4, 6, 9];
let count = 0;
let x = +prompt("nhap gia tri can tim kiem");
for (let key in array) {
  if (x === array[key]) {
    count++;
  }
}
console.log("số lần phần tử xuất hiện trong mảng là : ", count);
