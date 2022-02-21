import readlineSync from 'readline-sync';

const roundsCount = 3;

const engine = (gameDiscription, generateRound) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDiscription);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, expected] = generateRound();
    console.log(`Question: ${question}`);
    const actual = readlineSync.question('Your answer: ');
    if (expected !== actual) {
      console.log(`'${actual}' is wrong answer ;(. Correct answer was '${expected}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default engine;
