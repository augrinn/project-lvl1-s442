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

export default () => {
  const rules = 'What is the result of the expression?';
  const getQuestion = () => `${getRandomInt(minNumber, maxNumber)} ${getRandomOperation()} ${getRandomInt(minNumber, maxNumber)}`;
  const getCorrectAnswer = (question) => {
    const questionArr = question.split(' ');
    const first = parseInt(questionArr[0], 10);
    const second = parseInt(questionArr[2], 10);
    const sign = questionArr[1];
    if (sign === '+') {
      return String(first + second);
    }
    if (sign === '-') {
      return String(first - second);
    }
    return String(first * second);
  };
  return cons(rules, cons(getQuestion, getCorrectAnswer));
};
