// Core types supported in TS

// number, string, boolean, object, Array, Tuple, Enum, Any
// Note that the "Any" type is used mainly for situations where you
// absolutely need to have flexibility of types

// const aircraft: {
//   type: string;
//   variant: string;
//   numberProduced: number;
//   usage: string[];
//   // below is a "tuple" type; need EXACTLY two elements, first a number type, then a string type;
//   // however, you can still push on to the array since tuples allow push as an exception
//   engines: [number, string];
// } = {
//   type: "Boeing 747",
//   variant: "-400",
//   numberProduced: 1557,
//   usage: ["passenger", "cargo", "government", "specialized"],
//   engines: [4, "GE CF6-80"]
// }

// aircraft.engines.push("RR RB211-524");
// aircraft.engines.push("PW 4000");

// Code block below is doing EXACTLY the same thing as the block above,
// except the one below is being much more specific as to what TYPES of
// values can be assigned to each key; here, we are telling TS exactly
// what the value type is for each key being declared; above, TS infers
// what the value of type is from the actual values assigned to each key

// const aircraft: {
//   type: string;
//   numberProduced: number;
// } = {
//   type: "Boeing 747",
//   numberProduced: 1557
// }

// console.log(aircraft);

// -------------------------------------

// enum entries have indices like arrays e.g. 0, 1, 2, etc
enum ENGINE_TYPES {
  GENERAL_ELECTRIC = "CF6-80",
  ROLLS_ROYCE = "RB211-524",
  PRATT_AND_WHITNEY = "PW 4000"
};

const aircraft = {
  type: "Boeing 747",
  variant: "-400",
  numberProduced: 1557,
  usage: ["passenger", "cargo", "government", "specialized"],
  engines: ENGINE_TYPES.PRATT_AND_WHITNEY
}

if (aircraft.engines === ENGINE_TYPES.PRATT_AND_WHITNEY) {
  console.log('The PW engines have a thrust rating from 52,000lb - 62,000 lb each');
}