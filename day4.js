const readline = require("readline");

// Create an interface for user input and output
const userInPut = readline.createInterface({
  input: process.stdin, // Accepts input from the terminal
  output: process.stdout, // Sends output to the terminal
});

// First interaction: Ask for name and age
userInPut.question("What is your name? ", (name) => {
  console.log(`Hello there, ${name}!`);

  userInPut.question("Please, how old are you? ", (age) => {
    console.log(`That is nice. You are ${age} years old. Nice to meet you.`);
    userInPut.close();

    // Second interaction quiz 
    const quiz = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    function askQuestion(){
        quiz.question("What is 4 + 8? ", (answer) => {
            if (parseInt(answer) === 12) {
              console.log("Congratulations, you are correct!");
              quiz.close();
            } else {
              console.log("Oops! Try again. You can do this!");
              askQuestion();
            }
          });
    }
  
  });
});
