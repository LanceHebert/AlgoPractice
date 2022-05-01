// Class = a blueprint for creating objects with pre defined properties and methods

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
}

let firstStudent = new Student("Lance", "Hebert");
