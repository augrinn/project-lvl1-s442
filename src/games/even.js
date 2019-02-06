import { cons } from 'hexlet-pairs';

const minNumber = 0;

const maxNumber = 50;

const isEven = number => number % 2 === 0;

const getRandomInt = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;

export default () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  const getQuestion = () => getRandomInt();
  const getCorrectAnswer = question => (isEven(question) ? 'yes' : 'no');

  return cons(rules, cons(getQuestion, getCorrectAnswer));
};
