class Department {
  name: string; // defines a "field"; can also do name: string = 'Andrew'; or name: string = 'DEFAULT';

  constructor(userName: string) {
    this.name = userName;
  }

  // a method in this contructor
  describe (this: Department) {
    // NOTE!!! This "name" does not reference the "name" field above, but a global name variable that lies outside this class
    // because we're not using the "this" keyword to reference the name property above
    
    // console.log('Department: ', name);

    // so we do this instead (pun intended)
    console.log('Department: ', this.name);
  }
}

// creating a new Department object
const accounting = new Department('Accounting');

// console.log('The new dept is ', accounting);

accounting.describe();

// Now take a look at the code below

// const accountingCopy = {
//   describe: accounting.describe
// }

// accountingCopy.describe(); // results in "undefined" printed to the console (see explanation below)

// correct solution
const accountingCopy = {
  name: 'Susan', describe: accounting.describe
}

accountingCopy.describe();

// Note that in the decribe method declaration in the constructor above, you can also pass in
// this: Department. By doing that,// you add extra type safety, and the incorrect solution
// on line 32 will throw a compilation error