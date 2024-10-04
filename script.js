// 1.

const isArithmetic = (arr) => {
  if (arr.length <= 2) return false;

  // hitung selisih
  const selisih = arr[1] - arr[0];

  for (let y = 2; y < arr.length; y++) {
    if (arr[y] - arr[y - 1] !== selisih) {
      return false;
    }
  }
  return true;
};

console.log(isArithmetic([1, 2, 3, 4, 5]));
console.log(isArithmetic([1, 5, 9, 12]));

// 2.
function threeStepAB(str) {
  for (let i = 0; i < str.length - 4; i++) {
    if (str[i] === "a" && str[i + 4] === "b") {
      return true;
    }
    if (str[i] === "b" && str[i + 4] === "a") {
      return true;
    }
  }
  return false;
}

console.log(threeStepAB("abcdefg"));
console.log(threeStepAB("lane borrowed"));
console.log(threeStepAB("i am sick"));

// 3.
function sumArray(arr, int) {
  let pairs = [];
  let seen = new Set();
  for (let num of arr) {
    let complement = int - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }

  return pairs;
}

console.log(sumArray([2, 1, 4, 3], 5));
console.log(sumArray([1, 8, 10, 3], 11));

// 4.
function arrSum(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  let start = 0,
    end = 0,
    s = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxEndingHere + arr[i]) {
      maxEndingHere = arr[i];
      s = i;
    } else {
      maxEndingHere += arr[i];
    }

    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
      start = s;
      end = i;
    }
  }

  return [arr.slice(start, end + 1), maxSoFar];
}

let a = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(arrSum(a));
