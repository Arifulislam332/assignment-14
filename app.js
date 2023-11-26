// const marks = 85;

// if (marks >= 80) {
//   console.log("A+");
// } else if (marks >= 70) {
//   console.log("A");
// } else if (marks >= 60) {
//   console.log("A-");
// } else if (marks >= 50) {
//   console.log("B");
// } else if (marks >= 40) {
//   console.log("C");
// } else if (marks >= 33) {
//   console.log("D");
// } else {
//   console.log("A+");
// }

const burgerPrice = 170;
const barbeque = 600;
const money = 800;

if (money >= barbeque) {
  console.log("You can buy BBQ");
}
if (money >= burgerPrice) {
  console.log("You can buy  Burger");
} else {
  console.log("Nothing");
}

// TYPE CONVARTION
const Digit = 100;
const convertedDigit = Digit.toString();

console.log(typeof convertedDigit);

const num = 100;
const convertedNum = String(num);

console.log(typeof convertedNum);

const FirstName = "Shijuka";
const convertedFirst = Number(FirstName);

console.log(convertedFirst); // NaN -- not a number

// type coercion
console.log(10 + 10);
console.log(10 + "20");
console.log(10 - "20");
console.log(10 * "20");
console.log(10 / "20");
console.log("5" + "2" - 3 * 7);

// truthy and falsy values
// falsy
// 0
// ""
// null
// underfined
// NaN

// equality operators
console.log(5 === "5"); //perfect

//==, check value
//===, check value + type

// boolen logic
// AND -- &&
// OR -- ||
// NOT -- !

const age = 20;
const balance = 50000;
const isSheTiktoker = false;
const isGovtJob = true;

if ((age >= 18 && balance >= 100000) || isGovtJob);
{
  if (isSheTiktoker) {
    console.log("Ami biya kormoo🫡");
  } else {
    console.log("Ami biya kormo na 🥹");
  }
}

// year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
const seasion = 2023;
if ((seasion % 4 === 0 && seasion % 100 !== 0) || seasion % 400 === 0) {
  console.log(seasion, "Is leap seasion");
} else {
  console.log(seasion, "Is not leap seasion");
}

const year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is leap year.`);
} else {
  console.log(`${year} is not leap year.`);
}

// switch-case
const marks = 56;
switch (true) {
  case marks >= 80:
    console.log("A+");
    break;
  case marks >= 70:
    console.log("A");
    break;
  case marks >= 60:
    console.log("A-");
    break;
  case marks >= 50:
    console.log("B");
    break;
  case marks >= 40:
    console.log("C");
    break;
  case marks >= 33:
    console.log("D");
    break;
  default:
    console.log("F");
}

const day = "mon";

switch (day) {
  case "sat":
  case "mon":
  case "wed":
  case "fri":
    console.log("offday");
    break;

  case "sun":
  case "tue":
  case "thu":
    console.log("class day");
    break;
}
const month = "Feb";

switch (true) {
  case month === "sat":
  case month === "mon":
  case month === "wed":
  case month === "fri":
    console.log("offday");
    break;

  case month === "sun":
  case month === "tue":
  case month === "thu":
    console.log("class day");
    break;
  default:
    console.log("invalid month");
}

//tarnary operator
const a = 10;
if (a === 10) {
  const b = 20;

  console.log(b);
}

// statment vs expression
//tarnary operator

const teamA = 3;
const teamB = 5;

const winner = teamA > teamB ? "team A" : "team B";

console.log(winner);
const number = 24;
const result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);
