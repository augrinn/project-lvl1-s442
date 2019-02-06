import readlineSync from 'readline-sync';
import chalk from 'chalk';

export const printSeparator = (separator = '') => {
  console.log(separator);
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
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

export const startGame = (name) => {
  const countQuestions = 3;
  const min = 0;
  const max = 50;
  const iter = (numberQuestion) => {
    if (numberQuestion === 0) {
      return true;
    }
    const currentNumber = getRandomInt(min, max);
    const correctAnswer = isEven(currentNumber) ? 'yes' : 'no';
    const answer = askQuestion(currentNumber);
    if (answer.toLowerCase() !== correctAnswer) {
      console.log(`${chalk.red(answer)} is wrong answer ;(. Correct answer was ${chalk.red(correctAnswer)}.`);
      console.log(`Let${chalk.red("'s try again,")} ${chalk.red(name)}${chalk.red('!')}`);
      return false;
    }
    console.log('Correct!');
    return iter(numberQuestion - 1);
  };
  if (iter(countQuestions)) {
    console.log(`Congratulations, ${name}!`);
  }
};
