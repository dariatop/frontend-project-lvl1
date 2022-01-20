#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userGreeting from './cli.js';
import findEven from '../games/brain-even.js';
import findExpression from '../games/brain-calc.js';

const userName = userGreeting();
console.log(`Hello, ${userName}!`);

let nameGame;
do {
  nameGame = readlineSync.question('Write a name of the game you want to play - "Even" or "Calc": ');
} while (nameGame !== 'Even' && nameGame !== 'Calc');

let correctness = true;
for (let i = 0; i < 3; i += 1) {
  let result;
  if (nameGame === 'Even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    result = findEven();
  } else {
    console.log('What is the result of the expression?');
    result = findExpression();
  }
  // Получаем ответ пользователя
  const getUserAnswer = () => readlineSync.question('Your answer: ');
  const userAnswer = getUserAnswer();
  if (result !== userAnswer) {
    correctness = false;
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
    break;
  }
  console.log('Correct!');
}
if (correctness) console.log(`Congratulations, ${userName}!`);
