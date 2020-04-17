class DepartmentTwo {
  private name: string;
  private employees: string[] = [];

  constructor(user: string) {
    this.name = user;
  }

  // a method in this contructor
  describe (this: DepartmentTwo) {
    console.log('Department: ', this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log('Total employes: ', this.employees.length, '\nEmployees: ', this.employees);
  }
}

// creating a new Department object
const accountingTwo = new DepartmentTwo('Accounting_Two');

accountingTwo.addEmployee('Max');
accountingTwo.addEmployee('Manu');

// console.log('The new dept is ', accounting);

accountingTwo.describe();
accountingTwo.printEmployeeInformation();