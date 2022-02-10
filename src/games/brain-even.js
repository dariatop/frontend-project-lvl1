import { getRandomInRange } from '../helpers.js';
import engine from '../index.js';

const findEven = () => {
  const number = getRandomInRange(0, 100);
  if (number % 2 === 0) {
    return [String(number), 'yes'];
  }
  return [String(number), 'no'];
};
engine('Answer "yes" if the number is even, otherwise answer "no".', findEven);
export default findEven;
