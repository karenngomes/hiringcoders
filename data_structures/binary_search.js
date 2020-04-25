var values = [5, 8, 10, 22, 38, 45, 60, 90, 120];

function binSearch(num) {
  let begin = 0,
    end = 9,
    middle;

  while (begin <= end) {
    middle = parseInt((begin + end) / 2);
    if (num === values[middle]) {
      return middle;
    } else if (num > values[middle]) {
      begin = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

console.log(binSearch(10));
console.log(binSearch(50));
console.log(binSearch(60));
