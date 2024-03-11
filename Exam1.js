class Person {
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = null;
  constructor(name, address, email, phone, accountType) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
  }
  setAccountType() {
    this.accountType = accountType;
  }
  toString() {
    return `Person[Name = ${this.name}, Address = ${this.address}, Email = ${this.email}, Phone = ${this.phone}]`;
  }
}

class Guest extends Person {
  roomBooking = [];
  constructor(name, address, email, phone, accountType) {
    super(name, address, email, phone, accountType);
  }
  addRoomBooking(roomBooking) {
    this.roomBooking.push(roomBooking);
  }
  createBooking() {}
  toString() {
    return `${super.toString()}, AccountType = ${this.accountType}`;
  }
}

class Hotel {
  name = "";
  location = "";
  rooms = [];
  constructor(names, location) {
    this.names = names;
    this.location = location;
  }
  addNewRoom(room) {
    this.rooms.push(room); // Adding a room to the hotel
  }

  toString() {
    let inHotel = "";
    for (let i = 0; i < this.rooms.length; i++) {
      inHotel += "\t" + `${this.rooms[i].toString()}` + "\n";
    }
    return `HOTEL: ${this.name}, ${this.location}, ${inHotel}`;
  }
}

class Room {
  roomNumber = "";
  style = null;
  status = null;
  roomPrice = 0;
  constructor(roomNumber, style, status, roomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }
  isRoomAvailable(roomNumber) {
    return (
      this.roomNumber === roomNumber && this.status === RoomStatus.AVAILABLE
    );
  }
  createRoom(roomNumber, style, status, roomPrice) {
    const room = new Room(roomNumber, style, status, roomPrice);
    return room != null;
  }
  toString() {
    return `Room[${this.roomNumber}, ${this.style}, ${this.status},Price = ${this.roomPrice}]`;
  }
}

//Enum
class AccountType {
  static GUEST = "guest";
  static RECEPTIONS = "receptions";
  constructor(name) {
    this.name = name;
  }
}
class RoomStatus {
  static AVAILABLE = "available";
  static DISAVAILABLE = "disavailable";
  static LATECHECKOUT = "latecheckout";
  static EARLYCHECKELN = "earlycheckeln";
  constructor(name) {
    this.name = name;
  }
}
class RoomStyle {
  static ROOM1 = "Double bed Sea view";
  static ROOM2 = "Twin bed pool view";
  static ROOM3 = "Twin bed Sea view";
  static ROOM4 = "Double  bed pool view";
  constructor(name) {
    this.name = name;
  }
}

//---Person----//
const main = () => {
  const Alice = new Guest(
    "Alice",
    "dormitory",
    "Aliceza@gmail.com",
    "0123456789",
    AccountType.GUEST
  );
  const Bob = new Guest(
    "Bob",
    "dormitory",
    "Bobza@gmail.com",
    "123456789",
    AccountType.GUEST
  );
  const Catherine = new Guest(
    "Catherine",
    "Catherine House",
    "CatherineJa@gmail.com",
    "123456789",
    AccountType.RECEPTIONS
  );
  const David = new Guest(
    "David",
    "David House",
    "DavidKub@gmail.com",
    "123456789",
    AccountType.RECEPTIONS
  );

  //---Hotel---//
  const Room1 = new Room("Room1", RoomStyle.ROOM1, RoomStatus.AVAILABLE, 2500);
  const Room2 = new Room("Room2", RoomStyle.ROOM2, RoomStatus.AVAILABLE, 4500);
  const Room3 = new Room("Room3", RoomStyle.ROOM3, RoomStatus.AVAILABLE, 5600);
  const Room4 = new Room("Room4", RoomStyle.ROOM4, RoomStatus.AVAILABLE, 8000);

  hotel.addNewRoom(Room1);
  hotel.addNewRoom(Room2);
  hotel.addNewRoom(Room3);
  hotel.addNewRoom(Room4);

  console.log(Alice.toString());
  console.log(Bob.toString());
  console.log(Catherine.toString());
  console.log(David.toString());
  console.log(Room1.isRoomAvailable("Room1"));
  console.log(Room2.isRoomAvailable("Room2"));
  console.log(Room3.isRoomAvailable("Room3"));
  console.log(Room4.isRoomAvailable("Room4"));
};

main();
