let values = [8, 7, 6, 5, 4, 3, 2, 1];

function sort() {
  let temp;
  let end = values.length - 1;
  for (let i = 0; i < end; i++) {
    for (let j = 0; j < end - i; j++) {
      if (values[j] > values[j + 1]) {
        temp = values[j];
        values[j] = values[j + 1];
        values[j + 1] = temp;
      }
    }
  }
}

sort();

console.log(values);
