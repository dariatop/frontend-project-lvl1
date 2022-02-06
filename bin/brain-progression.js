import userGreeting from '../src/cli.js';
import { getRandomInRange, askQuestion } from '../src/index.js';

const userName = userGreeting();

let correctness = true;
for (let a = 0; a < 3; a += 1) {
  const x = [];
  const start = getRandomInRange(1, 99);
  const diff = getRandomInRange(1, 10);
  for (let i = start; i <= 1000; i += diff) {
    x.push(i);
  }
  x.length = 10;
  const index = getRandomInRange(0, 9);
  const expected = x[index];
  x[index] = '..';
  const actual = 1 * askQuestion(`What number is missing in the progression?\nQuestion: ${x.join(' ')}`);
  if (expected !== actual) {
    correctness = false;
    console.log(`'${actual}' is wrong answer ;(. Correct answer was '${expected}'.\nLet's try again, ${userName}!`);
    break;
  }
  console.log('Correct!');
}
if (correctness) console.log(`Congratulations, ${userName}!`);
