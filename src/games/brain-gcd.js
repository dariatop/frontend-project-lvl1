import { getRandomInRange } from '../helpers.js';
import engine from '../index.js';

const findGCD = () => {
  const firstNumber = getRandomInRange(0, 100);
  const secondNumber = getRandomInRange(0, 100);
  if (firstNumber === 0 && secondNumber !== 0) return [`${firstNumber} ${secondNumber}`, String(secondNumber)];
  if (secondNumber === 0 && firstNumber !== 0) return [`${firstNumber} ${secondNumber}`, String(firstNumber)];
  if (firstNumber % secondNumber === 0) return [`${firstNumber} ${secondNumber}`, String(secondNumber)];
  if (secondNumber % firstNumber === 0) return [`${firstNumber} ${secondNumber}`, String(firstNumber)];
  const x = Math.trunc(Math.min(firstNumber, secondNumber) / 2);
  for (let i = x; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) return [`${firstNumber} ${secondNumber}`, String(i)];
  }
  return [`${firstNumber} ${secondNumber}`, String(1)];
};
engine('Find the greatest common divisor of given numbers.', findGCD);
export default findGCD;
