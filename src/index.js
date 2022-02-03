import readlineSync from 'readline-sync';

// Делаем общий генератор случайных чисел
export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const askQuestion = (question) => {
  console.log(question);
  return readlineSync.question('Your answer: ');
};
