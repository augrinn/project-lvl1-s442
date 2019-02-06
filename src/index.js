import readlineSync from 'readline-sync';
import chalk from 'chalk';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const printSeparator = (separator = '') => {
  console.log(separator);
};

export const tellRules = () => {
  console.log(`Answer ${chalk.red('"yes"')} ${chalk.bold('if')} number even otherwise answer ${chalk.red('"no"')}.`);
};

export const sayHello = (name) => {
  console.log(`Hello, ${name}`);
};

export const askName = () => readlineSync.question('May I have your name? ');

const isEven = number => number % 2 === 0;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const getCountRound = () => 3;

const getMinNumber = () => 0;

const getMaxNumber = () => 50;

export const startGame = () => {
  printSeparator();
  greeting();
  tellRules();
  printSeparator();
  const name = askName();
  sayHello(name);
  printSeparator();
  const check = (numberRound) => {
    if (numberRound === 0) {
      return true;
    }
    const question = getRandomInt(getMinNumber(), getMaxNumber());
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    const answer = askQuestion(question);
    if (answer.toLowerCase() !== correctAnswer) {
      console.log(`${chalk.red(answer)} is wrong answer ;(. Correct answer was ${chalk.red(correctAnswer)}.`);
      return false;
    }
    console.log('Correct!');
    return check(numberRound - 1);
  };
  if (check(getCountRound())) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let${chalk.red("'s try again,")} ${chalk.red(name)}${chalk.red('!')}`);
  }
};
