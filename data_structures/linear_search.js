var values = [5, 8, 10, 22, 45, 38];

function search(num) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(search(10));
console.log(search(50));
