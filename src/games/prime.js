import { startGame } from '..';
import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minNumber = 1;

const maxNumber = 500;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const iter = (divider) => {
    if (number % divider === 0) {
      return false;
    }
    if (divider >= Math.sqrt(number)) {
      return true;
    }
    return iter(divider + 1);
  };
  return iter(2);
};

const getDataQuestion = () => {
  const number = getRandomInt(minNumber, maxNumber);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => startGame(description, getDataQuestion);
