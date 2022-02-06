import userGreeting from '../src/cli.js';
import { getRandomInRange, askQuestion } from '../src/index.js';

const userName = userGreeting();

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

let correctness = true;
for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandomInRange(0, 100);
  const expected = isPrime(randomNumber);
  const actual = askQuestion(`Answer "yes" if the number is prime, otherwise answer "no".\nQuestion: ${randomNumber}`);
  if (expected !== actual) {
    correctness = false;
    console.log(`'${actual}' is wrong answer ;(. Correct answer was '${expected}'.\nLet's try again, ${userName}!`);
    break;
  }
  console.log('Correct!');
}
if (correctness) console.log(`Congratulations, ${userName}!`);
