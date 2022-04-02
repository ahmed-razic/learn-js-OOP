//String objects

const name1 = 'Ahmed';
const name2 = new String('Ahmed');

console.log(name1);
console.log(name2);

name2['5'] = 'foo';
console.log(name2);
console.log(name2.length);

for (let index = 0; index <= name2.length; index++) {
  const element = name2[index];
  console.log(element);
}

//Number objects
const num1 = 5;
const num2 = new Number(5);

console.log(num1);
console.log(num2);

//Boolean obejcts

const bol1 = false;
const bol2 = new Boolean(true);

console.log(bol1);
console.log(bol2);

//Function objects

const sum1 = function (a, b) {
  return a + b;
};

const sum2 = new Function('a', 'b', 'return a + b');

console.log(sum1(10, 5));
console.log(sum2(10, 5));

//Arrays objects
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);

console.log(arr1);
console.log(arr2);
