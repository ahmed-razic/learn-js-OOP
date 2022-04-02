//object literal

const person = {
  firstName: 'Ahmed',
  lastName: 'Razic',
  age: 46,
  city: 'Sarajevo',
  state: 'BiH',
};

//console.log(person);

function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    //console.log(this.birthday, this.birthday.getTime(), Date.now(), diff);
    const age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  };
}

const ahmed = new Person('ahmed', '6-1-1976');
console.log(ahmed.calculateAge());
