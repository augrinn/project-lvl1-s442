import { startGame } from '..';
import { cons } from 'hexlet-pairs';

const minNumber = 0;

const maxNumber = 50;

const getRandomInt = (max, min) => Math.floor(Math.random() * (max - min)) + min;

const getRandomOperation = () => {
  switch (getRandomInt(1, 4)) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};

const getCorrectAnswer = (first, second, sign) => {
  if (sign === '+') {
    return String(first + second);
  }
  if (sign === '-') {
    return String(first - second);
  }
  return String(first * second);
};

export default () => {
  const description = 'What is the result of the expression?';
  const getDataQuestion = () => {
    const first = getRandomInt(minNumber, maxNumber);
    const second = getRandomInt(minNumber, maxNumber);
    const sign = getRandomOperation();
    const question = `${first} ${sign} ${second}`;
    const correctAnswer = getCorrectAnswer(first, second, sign);
    return cons(question, correctAnswer);
  };
  startGame(description, getDataQuestion);
};
