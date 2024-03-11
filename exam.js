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
  toString() {
    return `Username[Username = ${this.username}, password = ${this.password}]`;
  }
}

class Person {
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = "";
  constructor(name, address, email, phone, accountType) {
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
}

class Guest extends Person {
  toString() {
    return `Person[name = ${this.name}, address = ${this.address}, email = ${this.email}, phone = ${this.phone}, accountType = ${this.accountType}]`;
  }
}
class Receptionist extends Person {
  toString() {
    return `Person[name = ${this.name}, address = ${this.address}, email = ${this.email}, phone = ${this.phone}, accountType = ${this.accountType}]`;
  }
}

class Hotel {
  names = "";
  location = "";
  rooms = [];
  constructor(names, location) {
    this.names = names;
    this.location = location;
  }

  getNames() {
    return this.names;
  }
  getLocation() {
    return this.location;
  }
  setLocation() {
    this.location = location;
  }

  addRoom(room) {
    this.rooms.push(room); // Adding a room to the hotel
  }

  getRooms() {
    return this.rooms; // Returning all rooms in the hotel
  }

  toString() {
    return `Hotel[name = ${this.names}, Location = ${this.location}]`;
  }
}

class Room {
  roomNumber = "";
  style = "";
  status = "";
  roomPrice = 0;
  constructor(roomNumber, style, status, roomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }
  getRoomNumber() {
    return this.roomNumber;
  }
  setRoomNumber() {
    this.roomNumber = this.roomNumber;
  }
  getStyle() {
    return this.style;
  }
  setStyle() {
    this.style = this.style;
  }
  getRoomPrice() {
    return this.roomPrice;
  }
  setRoomPrice() {
    this.roomPrice = this.roomNumber;
  }
  getStatus() {
    return this.status;
  }
  setStatus() {
    this.status = this.status;
  }
  toString() {
    return `Room[Room = ${this.roomNumber}, Style = ${this.style}, Status = ${this.status},Price = ${this.roomPrice}]`;
  }
}

class RoomBooking {}

const main = () => {
    const Accocnt1 = new Accocnt(
        "Bob",
        "123456789"
    )
    console.log(Accocnt1.toString());
  const Guest1 = new Guest(
    "Alice",
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
  
  const Hotel1 = new Hotel("SE Hotel", "ThaiLand");
  console.log(Hotel1.toString());
  Hotel1.getRooms().forEach((room) => {
    console.log(room.toString());
  });
  const Room1 = new Room("589", "Double bed Sea view", "Fee", 2500); Hotel1.addRoom(Room1);
  console.log(Room1.toString());
  const Room2 = new Room("654", "Twin bed pool view", "Fee", 3500); Hotel1.addRoom(Room2);
  console.log(Room2.toString());
  const Room3 = new Room("780", "Twin bed Sea view", "Fee", 4500); Hotel1.addRoom(Room3);
  console.log(Room3.toString());
  const Room4 = new Room("1158", "Double  bed pool view", "Fee", 8500); Hotel1.addRoom(Room4);
  console.log(Room4.toString());
};

main();
