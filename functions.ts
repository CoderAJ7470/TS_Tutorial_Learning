function addNumbers (n1: number, n2: number) {
  return n1 + n2;
}

function printResult (number: number) {
  console.log('Result is:', number);
}

function addAndHandle (n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(addNumbers(5, 12));

// let addedValues: Function;

// addedValues is a pointer to a function which takes two arguments
// both of type number, and returns a number
let addedValues: (a: number, b: number) => number;

// addedValues is a pointer to the function add(...)
addedValues = addNumbers;

// re-assigning a value to addedValues works because the type of addValues is "any";
// fixing this involves declaring addedValues to be of a certain type
// addedValues = 5;

console.log(`Result is: ${addedValues(8, 8)}`);

// You could type the printResult(...) function above like so:

// function printResult(number: number): void {
  // console.log('Result is: '), number);
// }

// where "void" is the function's return type. However, it is not necessary to
// explicitly state that because TS will infer that for you since the function
// is not returning anything

// Note that TS also has an "undefined" type like JS does, but using void is the
// standard practice for functions that do not return anything

addAndHandle(4, 6, (result) => {
  console.log(`Result from addAndHandle: ${result}`);
})