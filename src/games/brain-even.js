import getRandomInRange from '../helpers.js';
import engine from '../index.js';

const discription = 'Answer "yes" if the number is even, otherwise answer "no".';

const findEven = () => {
  const number = getRandomInRange(0, 100);
  if (number % 2 === 0) {
    return [String(number), 'yes'];
  }
  return [String(number), 'no'];
};
export default () => { engine(discription, findEven); };
