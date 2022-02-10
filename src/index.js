import readlineSync from 'readline-sync';
import userGreeting from './cli.js';

const userName = userGreeting();

const engine = (gameDiscription, roundFunction) => {
  let correctness = true;
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    console.log(gameDiscription);
    const response = roundFunction();
    console.log(response[0]);
    const expected = response[1];
    const actual = readlineSync.question('Your answer: ');
    if (expected !== actual) {
      correctness = false;
      console.log(`'${actual}' is wrong answer ;(. Correct answer was '${expected}'.\nLet's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
  }
  if (correctness) console.log(`Congratulations, ${userName}!`);
};
export default engine;
