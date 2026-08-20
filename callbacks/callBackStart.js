function add(x, y) {
   return x + y;
}
function multiply(x, y) {
   return x * y;
}
function subtract(x, y) {
   return x - y;
}
function divide(x, y) {
   return x / y;
}

function calculate(a, b, operation) {
   console.log(operation(a, b));
}
calculate(10,5,add)
calculate(10,5,multiply)