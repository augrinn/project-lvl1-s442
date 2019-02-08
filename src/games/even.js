import { startGame } from '..';
import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const minNumber = 0;

const maxNumber = 50;

const isEven = number => number % 2 === 0;

const getDataQuestion = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const correctAnswer = (isEven(question) ? 'yes' : 'no');
  return cons(question, correctAnswer);
};

export default () => startGame(description, getDataQuestion);
