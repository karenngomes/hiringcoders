var top = -1;
var stack = [];
var MAX_SIZE = 100;

function push(num) {
  if (top < MAX_SIZE) {
    top += 1;
    stack[top] = num;
  } else {
    console.log("Stack is full");
  }
}

function isEmpty() {
  return top === -1;
}

function pop() {
  if (isEmpty()) {
    return "Stack is empty";
  } else {
    var num = stack[top];
    top -= 1;
    return num;
  }
}

/* ----- Convert decimal to binary ----- */

var number = 10;

while (number !== 0) {
  var rest = parseInt(number % 2);
  push(rest);
  number = parseInt(number / 2);
}

while (!isEmpty()) {
  console.log(pop());
}


