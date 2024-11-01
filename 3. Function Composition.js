//3. Function Composition
//Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;

// Compose function using map
const composeWithMap =
  (...fns) =>
  (x) => {
    let result = x;
    fns.map((fn) => {
      result = fn(result);
    });
    return result;
  };

// Compose function using reduce
//const compose =
//  (...fns) =>
//  (x) =>
//    fns.reduce((acc, fn) => fn(acc), x);

const composedFunction = composeWithMap(square, double, addFive);

console.log(composedFunction(3)); // Output: 23
