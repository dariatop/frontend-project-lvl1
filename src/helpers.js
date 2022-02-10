// Делаем общий генератор случайных чисел
export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Делаем генератор математических операций
export const getRandomOperation = () => {
  const operations = '+-*';
  let sign = '';
  for (let i = 0; i < 1; i += 1) {
    sign += operations[Math.round(Math.random() * (operations.length - 1))];
  }
  return sign;
};
