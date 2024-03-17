//----------- Person -----------//
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
  setAccount(accountType) {
    this.accountType = accountType;
  }
  toString() {
    return `Person : [Name = ${this.name}, Address = ${this.address}, Email = ${this.email}, Phone = ${this.phone}, AccountType = ${this.accountType}]`;
  }
}

//----------- Guest -----------//
class Guest extends Person {
  roombookings = [];
  totalRoomBookings = 0;
  constructor(name, address, email, phone, accountType) {
    super(name, address, email, phone, accountType);
  }

  addRoomBooking(roombooking) {
    this.roombookings.push(roombooking);
  }
  //----------- createBooking => ไม่แน่ใจว่าเสร็จยัง -----------//

  createBooking(reservationNumber, startDate, durationDays, room) {
    //ตรวจสอบห้องว่าง
    //const isRoomAvailable =  room.isRoomAvailable(room, startDate, durationDays);

    //if (isRoomAvailable()) {
    const booking = new RoomBooking(
      reservationNumber,
      startDate,
      durationDays,
      room
    );
    this.addRoomBooking(booking);
    this.totalRoomBookings++;
    return booking;
  }
  toString() {
    let inbooking = "";
    for (let i = 0; i < this.roombookings.length; i++) {
      inbooking += this.roombookings[i].toString();
    }
    return `${super.toString()} Total Bookings: ${
      this.totalRoomBookings
    }\n${inbooking}`;
  }
}
//----------- Receptionist -----------//
class Receptionist extends Person {
  constructor(name, address, email, phone, accountType) {
    super(name, address, email, phone, accountType);
  }
  //----------- ยังไม่ได้ทำ -----------//
  createBooking() {}
  toString() {
    return `${super.toString()}`;
  }
}

//----------- Hotel -----------//
class Hotel {
  name = "";
  location = "";
  rooms = [];
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  getRoom() {
    return this.rooms;
  }
  addNewRoom(room) {
    this.rooms.push(room);
  }
  toString() {
    let inHotel = "";
    for (let i = 0; i < this.rooms.length; i++) {
      inHotel += "\t" + `${this.rooms[i].toString()}` + "\n";
    }
    return `Hotel : ${this.name} ${this.location} \n ${inHotel}`;
  }
}

//----------- Room -----------//
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
  //----------- createRoom => ไม่เสร็จ โค้ดมั่วเอง -----------//
  createRoom(roomNumber, style, status, price) {
    const room = new Room(roomNumber, style, status, price);
    return room != null;
  }
  toString() {
    return `Room [${this.roomNumber}\t${this.style}\t${this.roomPrice}\t${this.status}]`;
  }
}

//----------- RoomBooking -----------//
class RoomBooking {
  constructor(
    reservationNumber,
    startDate,
    durationDays,
    room,
    status = null,
    createdBy = null
  ) {
    this.reservationNumber = reservationNumber;
    this.startDate = startDate;
    this.durationDays = durationDays;
    this.status = status;
    this.createdBy = createdBy;
    this.room = room;
  }

  setCreatedBy(createdBy) {
    this.createdBy = createdBy;
  }

  setRoom(room) {
    this.rooms = room;
  }

  getRoom() {
    return this.room;
  }

  setStatus(status) {
    this.status = status;
  }

  getDetail(reservationNumber) {
    const roombooking = new RoomBooking();
    return roombooking;
  }

  createBooking(reservationNumber, startDate, durationDays, room) {
    const booking = new RoomBooking(
      reservationNumber,
      startDate,
      durationDays,
      room,
      null
    );
    booking.setStatus(room.isRoomAvailable(room.roomNumber));
    this.addRoomBooking(booking);
    this.totalRoomBookings++;
    return booking;
}

  toString() {
    return `RoomBooking: [BookingNumber: ${this.reservationNumber}, Room : ${this.room} Status: ${this.status ? 'Available' : 'Available'}, Check-in date: ${this.startDate}, Stay duration: ${this.durationDays} nights, Booked by: ${this.createdBy || 'Catherine'}]`;
  }
}
//------ Enum------
class AccountType {
  static GUEST = "guest";
  static RECEPTIONIST = "receptionist";
  constructor(name) {
    this.name = name;
  }
}

class BookingStatus {
  static BOOKED = "booked";
  static NOTBOOKED = "notbooked";
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
  static DOUBLE_POOL = "Double Bed Pool View";
  static DOUBLE_SEA = "Double Bed Sea View";
  static TWIN_POOL = "Twin Bed Pool View";
  static TWIN_SEA = "Twin Bed Sea View";
  constructor(name) {
    this.name = name;
  }
}

//--------main ------
const main = () => {
  //------ Person------
  const alice = new Guest(
    "Alice",
    "Alice house",
    "Alice@asd.com",
    "0801234567",
    AccountType.GUEST
  );
  const bob = new Guest(
    "Bob",
    "Bob house",
    "Bob@asd.com",
    "0807654321",
    AccountType.GUEST
  );

  const catherine = new Receptionist(
    "Catherine",
    "Catherine house",
    "Catherine@asd.com",
    "0901234567",
    AccountType.RECEPTIONIST
  );
  const devid = new Receptionist(
    "Devid",
    "Devid house",
    "Devid@asd.com",
    "0907654321",
    AccountType.RECEPTIONIST
  );

  //------ Hotel ------
  const hotel = new Hotel("SE Hotel", "NPRU");

  const room1 = new Room(
    "Room1",
    RoomStyle.DOUBLE_POOL,
    RoomStatus.AVAILABLE,
    1000
  );
  const room2 = new Room(
    "Room2",
    RoomStyle.DOUBLE_SEA,
    RoomStatus.AVAILABLE,
    2000
  );
  const room3 = new Room(
    "Room3",
    RoomStyle.TWIN_POOL,
    RoomStatus.AVAILABLE,
    4000
  );
  const room4 = new Room(
    "Room4",
    RoomStyle.TWIN_SEA,
    RoomStatus.AVAILABLE,
    5000
  );

  hotel.addNewRoom(room1);
  hotel.addNewRoom(room2);
  hotel.addNewRoom(room3);
  hotel.addNewRoom(room4);

  bob.createBooking("Booking01", "11/03/2567", 3, room2);

  console.log(hotel.toString());
  console.log(bob.toString());
  console.log();
  console.log(alice.toString());
  console.log(catherine.toString());
  console.log(devid.toString());
};
main();