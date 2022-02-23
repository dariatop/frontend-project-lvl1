import getRandomInRange from '../helpers.js';
import engine from '../index.js';

const discription = 'What number is missing in the progression?';

const generateProgression = (firstNumber, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNumber + i * step);
  }
  return progression;
};

const generateRound = () => {
  const firstNumber = getRandomInRange(1, 99);
  const step = getRandomInRange(5, 15);
  const length = getRandomInRange(5, 10);
  const progression = generateProgression(firstNumber, step, length);
  const randomIndex = getRandomInRange(0, length - 1);
  const answer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => engine(discription, generateRound);
