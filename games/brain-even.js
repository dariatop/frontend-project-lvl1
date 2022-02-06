import userGreeting from '../src/cli.js';
import { getRandomInRange, askQuestion } from '../src/index.js';

const userName = userGreeting();
console.log(`Hello, ${userName}!`);

const findEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

let correctness = true;
for (let i = 0; i < 3; i += 1) {
  const randomRange = getRandomInRange(0, 100);
  const expected = findEven(randomRange);
  const actual = askQuestion(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomRange}`);
  if (expected !== actual) {
    correctness = false;
    console.log(`'${actual}' is wrong answer ;(. Correct answer was '${expected}'.\nLet's try again, ${userName}!`);
    break;
  }
  console.log('Correct!');
}
if (correctness) console.log(`Congratulations, ${userName}!`);
