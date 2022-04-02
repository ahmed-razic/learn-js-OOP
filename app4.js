function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('Ahmed', 'Razic');

console.log(person1);
console.log(person1.greeting());

function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.mebership = membership;
}

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

const customer1 = new Customer('John', 'Doe', '555-5555', 'Standard');

Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
};

console.log(customer1.greeting());
