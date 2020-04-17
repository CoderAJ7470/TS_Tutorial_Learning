// You can declare and initialized class fields directly in the constructor
class DepartmentThree {
  private employeesThree: string[] = [];

  // You have to specify that name is public otherwise TS will not know
  // the type of variable that name is; also, readonly is a TS keyword only;
  // it does not exist in JS
  constructor(private id: string, private readonly associationCode: number, private name: string) {
  }

  // a method in this contructor
  describe (this: DepartmentThree) {
    console.log('Department: ', this.id, this.name);
  }

  addEmployee(employee: string) {
    this.employeesThree.push(employee);
  }

  printEmployeeInformation() {
    console.log('Total employes: ', this.employeesThree.length, '\nemployeesThree: ', this.employeesThree);
  }
}

// creating a new Department object
const accountingThree = new DepartmentThree('dx5642', 492000, 'Accounting_Three');

accountingThree.addEmployee('Max');
accountingThree.addEmployee('Manu');

// console.log('The new dept is ', accounting);

accountingThree.describe();
accountingThree.printEmployeeInformation();