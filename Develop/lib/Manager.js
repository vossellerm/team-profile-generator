const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return JSON.parse(`${this.officeNumber}`);
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
