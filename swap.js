function swap() {
  let a = document.getElementById("number1").value;
  let b = document.getElementById("number2").value;
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  alert(
    `The value of a after swapping: ${a} and the value of b after swapping: ${b}`
  );
}

function isPrime() {
  let n = document.getElementById("number").value;
  let flag = true;
  if (n <= 1) {
    flag = false;
  }
  if (n == 2) {
    flag = true;
  }
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    alert(`${n} is Prime`);
  } else {
    alert(`${n} is not Prime`);
  }
}

function createArray() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  alert(`[${arr}]`);
}

function findArray() {
  const a = [];
  for (let i = 0; i < 10; i++) {
    a.push(Math.floor(Math.random() * 10));
  }
  const evenArr = [];
  for (let i = 0; i < 10; i++) {
    if (a[i] % 2 == 0) {
      evenArr.push(a[i]);
    }
  }
  alert(`[${a}]`);
  alert(`Even Elements:[${evenArr}]`);
}
