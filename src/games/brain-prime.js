import { getRandomInRange } from '../helpers.js';
import engine from '../index.js';

const isPrime = () => {
  const number = getRandomInRange(0, 100);
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return [String(number), 'no'];
    }
  }
  return [String(number), 'yes'];
};
engine('Answer "yes" if the number is prime, otherwise answer "no".', isPrime);
export default isPrime;
