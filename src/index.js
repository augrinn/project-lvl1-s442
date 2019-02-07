import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const greeting = () => {
  console.log();
  console.log('Welcome to the Brain Games!');
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

const countRound = 3;

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

export const startGame = (game) => {
  const description = car(game);
  const getDataQuestion = cdr(game);
  console.log();
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log();
  const check = (numberRound) => {
    if (numberRound === 0) {
      return true;
    }
    const dataQuestion = getDataQuestion();
    const question = car(dataQuestion);
    const correctAnswer = cdr(dataQuestion);
    const answer = askQuestion(question);
    if (answer.toLowerCase() !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      return false;
    }
    console.log('Correct!');
    return check(numberRound - 1);
  };
  const isWin = check(countRound);
  if (isWin) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
