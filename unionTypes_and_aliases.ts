function combine (
  input1: number | string, // this is the "Union" type
  input2: number | string) {6
  if(typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }
  else {
    return input1.toString() + input2.toString();
  }
}

// Adding numbers
const combinedAges = combine(30, 26);
console.log('The combined age is', combinedAges);

// Concatenating strings
const combinedNames = combine('Max', 'Anna');
console.log('The combined name is', combinedNames);

// NOTE: You can use a type alias to use in place of the Union type as shown below:

// type Combination = number | string; -> here, "Combination" is an alias for number | string (you can use any
// name as long as it is not a reserved type or keyword in JS or TS)

// you can put a + in front of variables to force them to be converted to the number type e.g. +input1