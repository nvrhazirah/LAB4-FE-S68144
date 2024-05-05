// Parent object constructor: Employee
function Employee(employeeName, employeeId, salary) {
  // Properties
  this.employeeName = employeeName;
  this.employeeId = employeeId;
  this.salary = salary;
}

// Child object constructor: Manager
function Manager(managerName, branch, employeeName, employeeId, salary) {
  // Inherit properties from Employee using call() method
  Employee.call(this, employeeName, employeeId, salary);

  // Additional properties specific to Manager
  this.managerName = managerName;
  this.branch = branch;
}

// Create a new Manager instance
var myManager = new Manager("Hazirah", "Malaysia", "Alice", 1120, 40000);

// Display all properties of the Manager instance
console.log("Manager Name: " + myManager.managerName);
console.log("Branch: " + myManager.branch);
console.log("Employee Name: " + myManager.employeeName);
console.log("Employee ID: " + myManager.employeeId);
console.log("Salary: $" + myManager.salary.toFixed(2));
