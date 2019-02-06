import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log();
  console.log('Welcome to the Brain Games!');
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

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
  console.log();
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log();
  const check = (numberRound) => {
    if (numberRound === 0) {
      return true;
    }
    const question = getRandomInt(getMinNumber(), getMaxNumber());
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    const answer = askQuestion(question);
    if (answer.toLowerCase() !== correctAnswer) {
      console.log(`$answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      return false;
    }
    console.log('Correct!');
    return check(numberRound - 1);
  };
  if (check(getCountRound())) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
