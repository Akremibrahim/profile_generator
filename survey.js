const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer1) => {
  rl.question("Where are you from? ", (answer2) => {
    rl.question("What are your goals? ", (answer3) => {
      rl.question("What is your favourtite programming language ", (answer4) => {
        rl.question("How long have you been coding? ", (answer5) => {
          rl.question("Tell us a quirky fact about yourself ", (answer6) => {
            console.log(`My name is Akrem' ${answer1}. ${answer1} I'm from Toronto ${answer2}, ${answer1} is to become a full stack developer ${answer3}. ${answer1} favourite programming language is HTML and CSS ${answer4}, ${answer1} I have been coding for about 2 months ${answer5}. And wait for it ${answer1} quirky fact is that i don't like dogs ${answer6}`);
            rl.close();
          })
        })
      })
    })
  })
})