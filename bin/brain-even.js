import readlineSync from 'readline-sync';

// Делаем генератор случайных чисел
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const askQuestion = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    i += 1;
    // Выдаем пользователю случайное число
    const randomRange = getRandomInRange(0, 100);
    console.log(`Question: ${randomRange}`);

    // Проверяем сами полученное случайное число на четность
    const isEven = () => (randomRange % 2 === 0);

    // Записываем правильный ответ в переменную
    const correctAnswer = isEven() ? 'yes' : 'no';

    // Получаем ответ пользователя
    const getUserAnswer = () => readlineSync.question('Your answer: ');
    const userAnswer = getUserAnswer();

    // Даем пользователю обратную связь
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
    if (i >= 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default askQuestion;
