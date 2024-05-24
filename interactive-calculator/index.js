const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startCalculator() {
  console.log("Welcome to Interactive Calculator!");

  rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {
      rl.question("Select operation (+, -, *, /): ", (operation) => {
        let result;
        switch (operation) {
          case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
          case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
          case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
          case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
          default:
            console.log("Invalid operation!");
            rl.close();
            return;
        }
        console.log(`Result: ${result}`);
        rl.close();
      });
    });
  });
}

module.exports = startCalculator;

if (require.main === module) {
  startCalculator();
}
