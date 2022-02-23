import getRandomInRange from '../helpers.js';
import engine from '../index.js';

const discription = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = getRandomInRange(1, 100);
  const answer = isPrime(randomNumber) === true ? 'yes' : 'no';
  const question = String(randomNumber);
  return [question, answer];
};
export default () => engine(discription, generateRound);
