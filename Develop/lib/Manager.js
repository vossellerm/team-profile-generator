class Manager {
  constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }

  getName() {
    return `${this.name}`;
  }
  getId() {
    return JSON.parse(`${this.id}`);
  }
  getEmail() {
    return `${this.email}`;
  }
  getOfficeNumber() {
    return JSON.parse(`${this.officeNumber}`);
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
