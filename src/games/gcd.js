import { startGame } from '..';
import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const minNumber = 2;

const maxNumber = 101;

const gcd = (divided, divider) => {
  const result = divided % divider;
  if (result === 0) {
    return divider;
  }
  return gcd(divider, result);
};

const getDataQuestion = () => {
  const first = getRandomInt(minNumber, maxNumber);
  const second = getRandomInt(minNumber, maxNumber);
  const question = `${first} ${second}`;
  const correctAnswer = String(first > second ? gcd(first, second) : gcd(second, first));
  return cons(question, correctAnswer);
};

export default () => startGame(description, getDataQuestion);
