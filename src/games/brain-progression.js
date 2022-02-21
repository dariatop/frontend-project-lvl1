import getRandomInRange from '../helpers.js';
import engine from '../index.js';

const discription = 'What number is missing in the progression?';

const findMissingNumber = () => {
  const x = [];
  const start = getRandomInRange(1, 99);
  const diff = getRandomInRange(1, 10);
  for (let i = start; i <= 1000; i += diff) {
    x.push(i);
  }
  x.length = 10;
  const index = getRandomInRange(0, 9);
  const expected = x[index];
  x[index] = '..';
  return [x.join(' '), String(expected)];
};
export default () => { engine(discription, findMissingNumber); };
