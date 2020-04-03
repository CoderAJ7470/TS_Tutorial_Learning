// The "unknown" type
 
// Here we give userInput a type of unknown; we don't know exactly what the type of userInput will be
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Mac and cheese';

// If we assign userInput to userName like on line 17 below (given what we have above), it
// will produce an error because userInput is of type unknown. The "unknown" type
// is a bit more rigid than the// "any" type; "any" does not induce type-checking;
// but "unknown" does. To put it in another way, "unknown" could be anything, but
// TS wants to make sure that whatever gets assigned to userName is going to be
// of type string, not anything else; if you make userInput of type "any"
// however, TS will assume you are ok with basically any type being assigned to
// userName and it will not do any checks whatsoever to ensure type validity

// userName = userInput;

// You can do this instead:
if (typeof userInput === 'string') {
  userName = userInput;
}

///////////////////////////////////////////////////////////

// The "never" type

function generateError (message: string, code: number): never {
  throw {
    message: message,
    errorCode: code
  };
}

generateError("Something did not work", 404);

// The return type of the generateError(...) function is "never".
// Meaning that the function will never return anything (so
// technically its return type is also void). It is good practice
// to specify the "never" return type for such functions so as to
// let other developers on a team know that this function does not
// return anything