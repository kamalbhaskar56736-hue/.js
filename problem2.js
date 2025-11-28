const randomNumber1 = Math.floor(Math.random() * 100 + 1);
const randomNumber2 = Math.floor(Math.random() * 100 + 1);

console.log("Random Number 1:", randomNumber1);
console.log("Random Number 2:", randomNumber2);

let userInput1;
while (randomNumber1 !== Number(userInput1)) {
  userInput1 = prompt("Guess the first random number :");
  if (randomNumber1 === Number(userInput1)) {
    console.log(" User guess the first number correct!");
    break;
  } else if (randomNumber1 > Number(userInput1)) {
    console.log("Too low! Please enter a higher number.");
  } else if (randomNumber1 < Number(userInput1)) {
    console.log("Too high! Please enter a smaller number.");
  }
}

let userInput2;
while (randomNumber2 !== Number(userInput2)) {
  userInput2 = prompt("Guess the second random number :");
  if (randomNumber2 === Number(userInput2)) {
    console.log(" User guessed the second number correct!");
    break;
  } else if (randomNumber2 > Number(userInput2)) {
    console.log("Too low! Please enter a higher number.");
  } else if (randomNumber2 < Number(userInput2)) {
    console.log("Too high! Please enter a smaller number.");
  }
}

//  Compare the two random numbers
if (randomNumber1 > randomNumber2) {
  console.log(` Random Number 1 (${randomNumber1}) WINS!`);
  console.log(` Random Number 2 (${randomNumber2}) LOSES!`);
} else if (randomNumber2 > randomNumber1) {
  console.log(` Random Number 2 (${randomNumber2}) WINS!`);
  console.log(` Random Number 1 (${randomNumber1}) LOSES!`);
} else {
  console.log(` It's a TIE! Both numbers are ${randomNumber1}`);
}
