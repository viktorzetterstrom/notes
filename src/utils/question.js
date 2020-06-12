const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (questionText) =>
  new Promise((resolve) => {
    rl.question(`${questionText}: `, (answer) => {
      resolve(answer);
      rl.close();
    });
  });

module.exports = question;
