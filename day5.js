// replicating what i did in day 4
const readline = require("readline");

const replicate = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

replicate.question('hey there, what are you doing?? ', (answer) => {console.log("oh realy, that is nice")
    replicate.close();
 });

