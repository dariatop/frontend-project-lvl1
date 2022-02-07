#!/usr/bin/env node
import userGreeting from '../src/cli.js';
import { getRandomInRange, askQuestion } from '../src/index.js';

// Делаем генератор математических операций
const getRandomOperation = () => {
  const operations = '+-*';
  let sign = '';
  for (let i = 0; i < 1; i += 1) {
    sign += operations[Math.round(Math.random() * (operations.length - 1))];
  }
  return sign;
};

// Переводим случайную матемтическую операцию из строки в знак
const toOperation = (randomSign, randomNum1, randomNum2) => {
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
  return String(result);
};

const userName = userGreeting();

let correctness = true;
for (let i = 0; i < 3; i += 1) {
  const randomSign = getRandomOperation();
  const randomNum1 = getRandomInRange(0, 100);
  const randomNum2 = getRandomInRange(0, 100);
  const expected = toOperation(randomSign, randomNum1, randomNum2);
  const actual = askQuestion(`What is the result of the expression?\nQuestion: ${randomNum1} ${randomSign} ${randomNum2}`);
  if (expected !== actual) {
    correctness = false;
    console.log(`'${actual}' is wrong answer ;(. Correct answer was '${expected}'.\nLet's try again, ${userName}!`);
    break;
  }
  console.log('Correct!');
}
if (correctness) console.log(`Congratulations, ${userName}!`);
