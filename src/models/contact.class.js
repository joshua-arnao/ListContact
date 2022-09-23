export class Contact {
  name = "";
  lastname = "";
  email = "";
  condition = false;

  constructor(name, lastname, email, condition) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.condition = condition;
  }
}
