import { getRandomInRange, getRandomOperation } from '../helpers.js';
import engine from '../index.js';

// Переводим случайную матемтическую операцию из строки в знак
const makeCalculation = () => {
  const randomSign = getRandomOperation();
  const randomNum1 = getRandomInRange(0, 100);
  const randomNum2 = getRandomInRange(0, 100);
  let result;
  switch (randomSign) {
    case '+':
      result = (randomNum1 + randomNum2);
      break;
    case '-':
      result = (randomNum1 - randomNum2);
      break;
    case '*':
      result = (randomNum1 * randomNum2);
      break;
    default:
      result = null;
  }
  return [`${randomNum1} ${randomSign} ${randomNum2}`, String(result)];
};
engine('What is the result of the expression?', makeCalculation);
export default makeCalculation;
