/****************** Exercise 1 ********************/

// List five examples of websites using loops. 
  


//1. The Social media feed (Facebook, Twitter)
// 2. The E-commerce websites for displaying product list (Amazon, eBay)
// 3. Music Streaming Apps for listing songs in playlist (Spotify, Apple Music)
// 4. News Websites for displaying articles (CNN, BBC)
// 5. The Job portals for listing job openings (LinkedIn, Indeed)




/****************** Exercise 2 ********************/

// Use a while loop to log to the console the numbers from 1 to 10

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}


/****************** Exercise 3 ********************/

// Use a while loop to calculate the sum of even numbers from 2 to 20

let sum = 0;
let num = 2;
while (num <= 20) {
  sum += num;
  num += 2;
}
console.log(`The sum of even numbers from 2 to 20 is ${sum}`);





/****************** Exercise 4 ********************/

// Implement a countdown using a while loop
let countdown = 10;

while (countdown >= 0) {
  console.log(countdown);
  countdown--;
}






/****************** Exercise 5 ********************/

// Review This Code
const secretNumber = Math.floor(Math.random() * 100) + 1; 
let guess;
let attempts = 0;

while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));

    if (isNaN(guess)) {
        console.log("Please enter a valid number.");
    } else {
        attempts++;
    }
}


// Refactor the code so that:
// 1. The user will see the alert "Too low!", if the number is too low. 
// 2. The user will see the alert "Too high!" if the number is too high. 
// 3. The user will see the alert "`Congratulations! You guessed the number [NUMBER] in [ATTEMPTS] attempts.`)" if the number is correct. 

if (guess < secretNumber) {
    console.log("Too low!");
  } else if (guess > secretNumber) {
    console.log("Too high!");
  } else {
    console.log(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
  }

/****************** Exercise 6 ********************/

// Simulating a vending machine using a while loop

// Initial amount of money the user has
let userBalance = 20;

// Price of an item in the vending machine
const itemPrice = 3;

console.log("Welcome to the Vending Machine!");
console.log(`You have $${userBalance} in your balance.`);

while (userBalance >= itemPrice) {
    console.log("Available options:");
    console.log("1. Snack A ($3)");
    console.log("2. Snack B ($2)");
    console.log("3. Exit");

    const choice = parseInt(prompt("Enter your choice:"));

    if (choice === 1) {
        console.log("You selected Snack A. Enjoy your snack!");
        userBalance -= itemPrice;
    } else if (choice === 2) {
        console.log("You selected Snack B. Enjoy your snack!");
        userBalance -= 2;
    } else if (choice === 3){
        console.log("Thank you for using the Vending Machine. Have a great day!");
    
    } else {
        console.log("Invalid choice. Please select a valid option.");
    }

    console.log(`Your current balance: $${userBalance}`);
}


// 1. Write the condition so that the while loop will eventually stop. 

if (userBalance < itemPrice) {
    console.log("Insufficient balance. Please add more money to use the Vending Machine.");
  }