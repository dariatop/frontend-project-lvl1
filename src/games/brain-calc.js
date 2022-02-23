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

const operators = ['+', '-', '*'];
const discription = 'What is the result of the expression?';

const generateRound = () => {
  const num1 = getRandomInRange(0, 100);
  const num2 = getRandomInRange(0, 100);
  const index = getRandomInRange(0, 2);
  const operator = operators[index];
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, num2, operator));
  return [question, answer];
};

export default () => engine(discription, generateRound);
