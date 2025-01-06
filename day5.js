// replicating what i did in day 4
const readline = require("readline");

const replicate = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

replicate.question('hey there, what are you doing?? ', (answer) => {
    console.log("oh realy, that is nice")
    replicate.close();

    const quiz = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    function askQuestion(){
        quiz.question(" emmh please what is 8 - 5", (answer) => {
            if(parseInt(answer) === 3) {
                console.log("not bad for someone like you");
                quiz.close();
            } else {
                console.log('try again and please think before answeing');
                askQuestion();
            }
        });

    }
    askQuestion();
 });


