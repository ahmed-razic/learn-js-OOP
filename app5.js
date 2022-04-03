class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  spec() {
    return `${this.make} ${this.model} ${this.year} ${this.color} `;
  }

  changeColor(newColor) {
    this.color = newColor;
  }

  static yearBuilt() {
    return `Year built is ${new Car('Audi', 'A3', 2033, 'red').year}`;
  }
}

const car1 = new Car('Audi', 'A3', 2022, 'red');
const car2 = new Car('Audi', 'A3', 2022, 'red');
const car3 = new Car('Audi', 'A3', 2022, 'red');
console.log(car1);
console.log(car1.spec());
console.log(car2.model);
console.log(car3.year);
console.log(Car.yearBuilt());

console.log(car1.color);
car1.changeColor('blue');
console.log(car1.color);

class NewCar extends Car {
  constructor(make, model, year, color, isNew) {
    super(make, model, year, color);
    this.isNew = isNew;
  }

  isNewCar() {
    return this.isNew ? 'Car is new' : 'Car is used';
  }
}

const car10 = new NewCar('Audi', 'A3', 2022, 'red', true);
console.log(car10.isNewCar());

const car11 = new NewCar('Audi', 'A3', 2022, 'red', false);
console.log(car11.isNewCar());

console.log(car10);
