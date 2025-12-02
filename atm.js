

let user ="kamal";
let pin = 1234;
let balance = 5000;

console.log(user);
let userPin = prompt("Enter the user PIN:");

if (userPin == pin) {
  console.log("Login Successful");

  let choice = prompt( "1. Check Balance\n2. Withdraw\n3. Deposit\n4. Exit\nEnter choice:" );

  if (choice == "1") {
    console.log("Your Balance: " + balance);
  }

  else if (choice == "2") {
    let amt = prompt("Enter amount to withdraw:");
    if (amt > balance) {
      console.log("Insufficient Balance");
    } else {
      balance -= amt;
      console.log("Withdraw case New Balance: " + balance);
    }
  }

  else if (choice == "3") {
    let amt = prompt("Enter amount to deposit:");
    balance += amt;
    console.log("Deposit  case Successful and New Balance: "  + balance);
  }

   else if (choice == "4")
    console.log("Thank you!");
  }

  else {
    console.log("Invalid pin please enter correct pin: ");
  }

