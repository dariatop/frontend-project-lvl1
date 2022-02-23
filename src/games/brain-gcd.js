import getRandomInRange from '../helpers.js';
import engine from '../index.js';

const discription = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) { return num2; }
  return getGcd(num2 % num1, num1);
};

const generateRound = () => {
  const num1 = getRandomInRange(1, 100);
  const num2 = getRandomInRange(1, 100);
  const answer = String(getGcd(num1, num2));
  const question = `${num1} ${num2}`;
  return [question, answer];
};
export default () => engine(discription, generateRound);
