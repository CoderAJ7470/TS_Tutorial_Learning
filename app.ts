 // Here we give userInput a type of unknown; we don't know exactly what the type of userInput will be
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Mac and cheese';

// If we assign userInput to userName like below (given what we have above), it
// will produce an error because userInput is of type unknown. The "unknown" type
// is a bit more rigid than the// "any" type; "any" does not induce type-checking;
// but "unknown" does

// userName = userInput;

// You can do this instead:
if (typeof userInput === 'string') {
  userName = userInput;
}