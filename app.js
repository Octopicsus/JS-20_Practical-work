console.log("---------------- TASK - 01 ---------------- \n ");

// let a = parseInt(prompt("Введи число a"));
// let b = parseInt(prompt("Введи число b"));

// console.log("your digit - A -> " + a);
// console.log("your digit - B -> " + b);

// if (a > b) {
//   console.log("Result: A > B");
// } else if (a === b) {
//   console.log("Result: A = B");
// } else {
//   console.log("Result: A < B");
// }

console.log("---------------- TASK - 02 ---------------- \n ");

// let distanceKM = parseFloat(prompt("Дистаниця в км"));

// console.log("distanse(km) = " + distanceKM + "km");

// let distanceFoot = parseFloat(prompt("Дистаниця в футах"));
// distanceFoot = distanceFoot * 0.305;
// console.log("distanse(foot) = " + distanceFoot + "km");

// if (distanceKM > distanceFoot) {
//   console.log("Дистаниця в КМ больше дистанции в Футах \n ");
// } else if (distanceKM === distanceFoot) {
//   console.log("Дистаниця в КМ равна дистанции в Футах \n ");
// } else {
//   console.log("Дистаниця в Футах больше дистанции в КМ \n ");
// }

console.log("---------------- TASK - 03 ---------------- \n ");

// let digitA = parseInt(prompt("digit - A"));
// let digitB = parseInt(prompt("digit - B"));

// console.log("digit A: " + digitA + " | " + "digit B: " + digitB);

// if (Number.isInteger(digitA / digitB)) {
//   console.log("Число B является делителем A");
// } else if (Number.isInteger(digitB / digitA)) {
//   console.log("Число A является делителем B");
// } else {
//   console.log("Числа не являются делителем друг друга");
// }

console.log("---------------- TASK - 04 ---------------- \n ");

// let Digit = parseInt(prompt("Your number"));
// console.log(Digit);

// let lastDigit = Digit % 10;
// console.log(lastDigit);

// console.log("Result: ");
// if (lastDigit % 2 === 0) {
//   console.log("Last digit " + lastDigit + " is a pair.");
// } else {
//   console.log("Last digit " + lastDigit + " is not a pair.");
// }

console.log("---------------- TASK - 05 ---------------- \n ");

// let num = parseInt(prompt("Enter a two-digit number"));
// let numLength = num.toString().length;

// if (numLength === 2) {
//   let y = num % 10;
//   let x = (num - y) / 10;

//   console.log("Your number: " + num + "\n ");
//   console.log("Left digit: " + x + "\n" + "Right digit: " + y + "\n ");

//   if (x > y) {
//     console.log("First digit is greater then second");
//   } else if (x < y) {
//     console.log("First digit is less then second");
//   } else {
//     console.log("Two digits are equal to each other");
//   }
// } else {
//   alert("Incorrect number entered");
// }

console.log("---------------- TASK - 06 ---------------- \n ");

// let threeDigitNum = parseInt(prompt("Enter a three-digit number"));
// let threeDigitNum_length = threeDigitNum.toString().length;

// if (threeDigitNum_length === 3) {
//   console.log("Your number: " + threeDigitNum + "\n ");

//   let c = threeDigitNum % 10;
//   let b = ((threeDigitNum - c) / 10) % 10;
//   let a = ((threeDigitNum - c) / 10 - (((threeDigitNum - c) / 10) % 10)) / 10;

//   let sum = a + b + c;
//   console.log(a, b, c);
//   console.log("Sum" + " = " + sum + "\n ");

//   if (Number.isInteger(sum / 2)) {
//     console.log("a. The sum of the numbers is paired: " + sum / 2);
//   } else {
//     console.log("a. The sum of the numbers is NOT paired: " + sum / 2);
//   }

//   if (Number.isInteger(sum / 5)) {
//     console.log("b. The sum of the numbers is a multiple of five: " + sum / 5);
//   } else {
//     console.log(
//       "b. The sum of the numbers is NOT a multiple of five: " + sum / 5
//     );
//   }

//   if (threeDigitNum > 100) {
//     console.log("c. YES, your number is greater than 100 \n ");
//   } else {
//     console.log("c. NO, your number is less than 100 \n ");
//   }
// } else {
//   alert("Incorrect number entered");
// }

console.log("---------------- TASK - 07 ---------------- \n ");

// let myNumber = parseInt(prompt("Enter a three-digit number"));
// let myNumber_lenght = myNumber.toString().length;

// if (myNumber_lenght === 3) {
//   console.log("Your number: " + myNumber);

//   let a = Math.floor(myNumber / 100);
//   let b = Math.floor((myNumber % 100) / 10);
//   let c = myNumber % 10;

//   if (a === b && b === c) {
//     console.log("a. YES, all digits are equal");
//   }

//   if (a === b || b === c || c === a) {
//     console.log("b. YES, your number has the same digits");
//   } else {
//     console.log("You have different digits. No matches. ");
//   }
// } else {
//   alert("Incorrect number entered");
// }

console.log("---------------- TASK - 08 ---------------- \n ");

// let mirNum = parseInt(prompt("Enter a six-digit number"));
// let lengthNum = mirNum.toString().length;
// let mirStr = mirNum.toString();

// if (lengthNum === 6) {
//   let firstSideNum = parseInt(mirStr.slice(0, 3));
//   let secondSideNum = parseInt(mirStr.slice(3, 6));

//   let a = Math.floor(firstSideNum / 100);
//   let b = Math.floor((firstSideNum % 100) / 10);
//   let c = firstSideNum % 10;

//   let x = Math.floor(secondSideNum / 100);
//   let y = Math.floor((secondSideNum % 100) / 10);
//   let z = secondSideNum % 10;

//   if (a === z && b === y && c === x) {
//     console.log("your number is a MIRROR");
//   } else {
//     console.log("Correct value not found");
//   }
// } else {
//   alert("Six digit number not found");
// }
