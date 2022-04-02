//Object.prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const age = new Date(diff);
  return Math.abs(age.getUTCFullYear() - 1970);
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const ahmed = new Person('Ahmed', 'Razic', '8-12-78');
const ibrahim = new Person('Ibrahim', 'Razic', 'March-12-88');

console.log(ahmed);
console.log(ibrahim);

console.log(ahmed.calculateAge());
console.log(ibrahim.calculateAge());

console.log(ahmed.getFullName());
console.log(ibrahim.getFullName());

const mary = new Person('Mary', 'Mary', 'Dec-12-1988');
console.log(mary);
console.log(mary.getFullName());
mary.getsMarried('Married');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('getFullName'));
console.log(mary.hasOwnProperty('birthday'));
