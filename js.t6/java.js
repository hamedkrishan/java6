//1

const person1 = { name: "Adam", age: 25, gender: "male" };
console.log(person1.name, person1.age, person1.gender);
//2

const person2 = { name: "Adam", age: 25 };
person2.gender = "male";
console.log(person2);
//3

const person3 = { name: "Adam", age: 25 };
person3["gender"] = "male";
console.log(person3);
//4

const person4 = { name: "Adam", age: 25 };
console.log(person4.name);
//5

const person5 = { name: "Adam", age: 25 };
console.log(person5["name"]);
//6

const person6 = { name: "Adam", age: 25, gender: "male" };
for (const key in person6) {
  console.log(`${key}: ${person6[key]}`);
}
//7

const person7 = { name: "Adam", age: 25, gender: "male" };
const keys = Object.keys(person7);
console.log(keys);
//8

const person8 = { name: "Adam", age: 25, gender: "male" };
const values = Object.values(person8);
console.log(values);
//9

const person9 = { name: "Adam", age: 25, gender: "male" };
const entries = Object.entries(person9);
console.log(entries);
//10

const obj1 = { name: "Adam", age: 25 };
const obj2 = { gender: "male" };
const result = Object.assign(obj1, obj2);
console.log(result);
//11

const person10 = { name: "Adam", age: 25 };
Object.freeze(person10);
person10.age = 26;
console.log(person10);
//12

const person = { name: "Adam", age: 25 };
Object.seal(person);
delete person.age;
person.age = 26;
console.log(person);
