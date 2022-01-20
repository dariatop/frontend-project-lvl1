// Делаем генератор случайных чисел
const randomInt = () => Math.floor(Math.random() * 100);

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

const findExpression = () => {
  // Выдаем пользователю случайное математическое выражение
  const randomSign = getRandomOperation();
  const randomNum1 = randomInt();
  const randomNum2 = randomInt();
  console.log(`Question: ${randomNum1} ${randomSign} ${randomNum2}`);
  return toOperation(randomSign, randomNum1, randomNum2);
};

export default findExpression;
