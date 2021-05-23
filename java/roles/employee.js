class Employee {
    constructor(employeeName, id, email) {
      this.employeeName = employeeName;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  }
  
  module.exports = Employee;