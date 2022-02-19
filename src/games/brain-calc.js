import getRandomInRange from '../helpers.js';
import engine from '../index.js';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error('Unsupported operator');
  }
};

const generateRound = () => {
  const num1 = getRandomInRange(0, 100);
  const num2 = getRandomInRange(0, 100);
  const x = ['+', '-', '*'];
  const index = getRandomInRange(0, 2);
  const operator = x[index];
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, num2, operator));
  return [question, answer];
};

engine('What is the result of the expression?', generateRound);
export default generateRound;
