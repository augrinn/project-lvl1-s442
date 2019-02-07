import { cons } from 'hexlet-pairs';

const minNumber = 2;

const maxNumber = 101;

const getRandomInt = () => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => `${getRandomInt(minNumber, maxNumber)} ${getRandomInt(minNumber, maxNumber)}`;
  const getCorrectAnswer = (question) => {
    const questionArr = question.split(' ');
    const first = parseInt(questionArr[0], 10);
    const second = parseInt(questionArr[1], 10);
    const gcd = (divided, divider) => {
      const result = divided % divider; 
      if (result === 0) {
        return divider;
      }
      return gcd(divider, result);
    };
    const result = first > second ? gcd(first, second) : gcd(second, first);
    return String(result);
  };
  return cons(rules, cons(getQuestion, getCorrectAnswer));
};