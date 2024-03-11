class Accocnt {
  username = "";
  password = "";
  status = "";
  constructor(username, password, status) {
    this.username = username;
    this.password = password;
    this.status = status;
  }
  getUsername() {
    return this.name;
  }
  getPassword() {
    return this.password;
  }
}
class Person {
  account = null;
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = "";
  constructor(account, name, address, email, phone, accountType) {
    this.account = account;
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
  }
  getName() {
    return this.name;
  }
  getAddress() {
    return this.address;
  }
  setAddress() {
    this.address = address;
  }
  setEmail() {
    this.email = email;
  }
  getEmail() {
    return this.email;
  }
  setPhone() {
    this.phone = phone;
  }
  getPhone() {
    return this.phone;
  }
  setAccountType() {
    this.accountType = accountType;
  }
  getAccountType() {
    return this.accountType;
  }
  getAccount() {
    return this.account;
  }
  toString() {
    return `Person[username = ${this.name}, password = ${this.password}, address = ${this.address}, email = ${this.email}, phone = ${this.phone}, accountType = ${this.accountType}]`;
  }
}

class Guest extends Person {}

class Receptionist extends Person {}

const main = () => {
  const Guest1 = new Guest(
    "Alice",
    "123456",
    "dormitory",
    "Aliceza@gmail.com",
    "0123456789",
    "Guest"
  );
  console.log(Guest1.toString());
  const Guest2 = new Guest(
    "Bob",
    "dormitory",
    "Bobza@gmail.com",
    "123456789",
    "Guest"
  );
  console.log(Guest2.toString());
  const Receptionist1 = new Receptionist(
    "Catherine",
    "House",
    "CatherineJa@gmail.com",
    "0620266548",
    "Receptionist"
  );
  console.log(Receptionist1.toString());
  const Receptionist2 = new Receptionist(
    "David",
    "House",
    "David@gmail.com",
    "0841235789",
    "Receptionist"
  );
  console.log(Receptionist2.toString());
};

main();
