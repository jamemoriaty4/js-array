const array = [4, 5, 6, 7, 4, 6, 9];

let x = +prompt("nhap gia tri can tim kiem");
for (let key in array) {
  if (x === array[key]) {
    console.log(key);
  } else console.log("khong tim thay phan tu thoa man");
}
