// You can declare and initialized class fields directly in the constructor
class DepartmentFour {
  private employeesFour: string[] = [];

  // You have to specify that name is public otherwise TS will not know
  // the type of variable that name is; also, readonly is a TS keyword only;
  // it does not exist in JS
  constructor(private id: string, private name: string) {
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
  }
}

const itAccounting = new ITDepartment("d4", ['Adam', 'Sally']);

class AccountingDepartment extends DepartmentFour {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  getReports() {
    console.log('Found the following reports: ', this.reports);
  }
}