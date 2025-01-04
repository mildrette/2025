const readline = require(
    "readline"
);
//  the readline module is to handle input and output in the terminal and without it being imported, node.js will not be able to get users input and output in the terminal because it does not have and in build way to do that 

const userInPut = readline.createInterface({
    input: process.stdin, // accepts input from the terminal
    output: process.stdout // the one output message to the terminal
})
//  this line create the connection between the users input and the terminal output

userInPut.question("what is your name? ", (name) => { console.log(`Helle there, ${name}!`)
userInPut.question("Please How old are you? ", (age) => {
    console.log(`That is nice, your are ${age} years old, Nice to meet you.`);
    userInPut.close();
});
});

