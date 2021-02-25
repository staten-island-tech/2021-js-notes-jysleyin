// // var life = 100; // Okay.
// // var name = "Mr Whalen";
// // var isSad = true;
// // var isHappy = null; // comes

// // life = life - 10;
// // // 90 hp
// // life = life - 10;
// // // 80 hp

// // console.log(life);
// // console.log(isSad);
// // console.log(isHappy);
// // // console.log("Hey Mr Whalen");

// // // constant means you cannot change the value
// // // const life = 100;
// // // life = life - 10;
// // // this cannot work.
// // // usage: select an image

// // stay consistent. use all double quotes or one
// console.log("Hell it's me Julissa");
// console.log("Hello it's me Julissa");

// const name = "Julissa";
// const age = 16;
// console.log(
//   "Hello it's me " + name + " and my age is " + age + " and I am old."
// );

// console.log("Hello its me $(name) and my age is $(age)");

// const combined = name + age;
// console.log(combined);
// console.log(typeof age);

// const name = "Dev Ed";

// function logger() {
//   console.log(name);
//   console.log("Party Time");
//   console.log("Party Time");
//   console.log("Party Time");
//   console.log("Party Time");
//   console.log("Party Time");
// }

// logger();

// function adder(num1, num2) {
//   console.log(num1 + num2);
// }

// adder(5, 10);

// function toUpper(text) {
//   const upperCased = text.toUpperCase();
//   console.log(upperCased);
// }

// toUpper(name);

// const toUpper = () => {};

const age = 10;
if (age > 18) {
  console.log("You are good to go!";)
} else if (age < 15) {
  console.log("Why are you even here?")
} else {
  console.log('You are not old enough');
}

const dice1 = 6;
const dice2 = 3;

if (dice1 === 6 || dice2 === 6) {
  console.log("You rolled a double")
} else {
  console.log("Not quite.")
}