import getRandomInRange from '../helpers.js';
import engine from '../index.js';

const discription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomInRange(0, 100);
  const question = String(randomNumber);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};
export default () => engine(discription, generateRound);
