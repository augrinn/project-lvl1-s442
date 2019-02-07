import { startGame } from '..';
import { cons } from 'hexlet-pairs';

const lengthProgression = 10;

const minStartProgression = 0;

const maxStartProgression = 5;

const minDiffProgression = 2;

const maxDiffProgression = 9;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getQuestion = (start, diffProgression, indexMissingNumber) => {
  const iter = (count, curentNumber, acc) => {
    if (count > lengthProgression) {
      return acc;
    }
    const newNumber = curentNumber + diffProgression;
    return iter(count + 1, newNumber, `${acc} ${count === indexMissingNumber ? '..' : curentNumber}`);
  };
  return iter(1, start, '');
};

export default () => {
  const description = 'What number is missing in the progression?';
  const getDataQuestion = () => {
    const startProgression = getRandomInt(minStartProgression, maxStartProgression);
    const diffProgression = getRandomInt(minDiffProgression, maxDiffProgression);
    const indexMissingNumber = getRandomInt(1, lengthProgression);
    const question = getQuestion(startProgression, diffProgression, indexMissingNumber);
    const correctAnswer = String(startProgression + (indexMissingNumber - 1) * diffProgression);
    return cons(question, correctAnswer);
  };
  startGame(description, getDataQuestion);
};
