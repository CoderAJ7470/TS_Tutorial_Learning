// Interfaces are only present in TS, not JS
// They can be used to create a custom type,
// like the Person type below
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void
}

let userOne: Person;

// must be of type Person and match the 
// object properties of Person declared above
userOne = {
  name: 'John',
  age: 40,

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

userOne.greet('Hello. My name is');