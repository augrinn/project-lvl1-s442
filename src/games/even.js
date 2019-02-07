import { startGame } from '..';
import { cons } from 'hexlet-pairs';

const minNumber = 0;

const maxNumber = 50;

const isEven = number => number % 2 === 0;

const getRandomInt = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const getDataQuestion = () => {
    const question = getRandomInt();
    const correctAnswer = (isEven(question) ? 'yes' : 'no');
    return cons(question, correctAnswer);
  };
  startGame(description, getDataQuestion);
};
