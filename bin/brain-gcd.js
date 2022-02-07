#!/usr/bin/env node
import userGreeting from '../src/cli.js';
import { getRandomInRange, askQuestion } from '../src/index.js';

const userName = userGreeting();

const findGCD = (a, b) => {
  if (a === 0 && b !== 0) return b;
  if (b === 0 && a !== 0) return a;
  if (a % b === 0) return b;
  if (b % a === 0) return a;
  const x = Math.trunc(Math.min(a, b) / 2);
  for (let i = x; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) return i;
  }
  return 1;
};

let correctness = true;
for (let i = 0; i < 3; i += 1) {
  const firstNumber = getRandomInRange(0, 100);
  const secondNumber = getRandomInRange(0, 100);
  const expected = findGCD(firstNumber, secondNumber);
  const actual = 1 * askQuestion(`Find the greatest common divisor of given numbers.\nQuestion: ${firstNumber} ${secondNumber}`);
  if (expected !== actual) {
    correctness = false;
    console.log(`'${actual}' is wrong answer ;(. Correct answer was '${expected}'.\nLet's try again, ${userName}!`);
    break;
  }
  console.log('Correct!');
}
if (correctness) console.log(`Congratulations, ${userName}!`);
export default findGCD;
