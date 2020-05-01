// You can declare and initialized class fields directly in the constructor
abstract class DepartmentFour {
  // private employeesFour: string[] = [];

  protected employeesFour: string[] = [];

  // You have to specify that name is public otherwise TS will not know
  // the type of variable that name is; also, readonly is a TS keyword only;
  // it does not exist in JS
  constructor(protected id: string, private name: string) {
  }

  static createEmployee(name: string) {
    return {
      name: name
    }
  }

  // a method in this contructor
  describe (this: DepartmentFour) {
    console.log('Department: ', this.id, this.name);
  }

  addEmployee(employee: string) {
    this.employeesFour.push(employee);
  }

  printEmployeeInformation() {
    console.log('Total employes: ', this.employeesFour.length, '\nemployeesFour: ', this.employeesFour);
  }
}

// ITDepartment inherits everything the base class has (which is DepartmentFour)
class ITDepartment extends DepartmentFour {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');

    this.admins = admins;
  }
}

const itAccounting = new ITDepartment("d4", ['Adam', 'Sally']);

class AccountingDepartment extends DepartmentFour {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if(this.lastReport) {
      return this.lastReport
    }

    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if(value) {
      this.addReport(value);
    }

    throw new Error('No report available to be added. Please input a valid value.');
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');

    this.lastReport = reports[0];
  }

  static getInstance() {
    if(AccountingDepartment.instance) {
      return this.instance
    }

    this.instance = new AccountingDepartment('a4', []);
    return this.instance;
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log('Found the following reports: ', this.reports);
  }

  describe() {
    console.log('Accounting DepartmentID is ', this.id);
  }
}

const employee1 = DepartmentFour.createEmployee('Misty'); // adding a new employee with the static method
console.log(employee1);

const accounting4 = AccountingDepartment.getInstance();

accounting4.addReport('Nothing to see here. Wonderful');

console.log(accounting4.mostRecentReport);

accounting4.printReports();

console.log(itAccounting);