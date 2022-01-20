// Делаем генератор случайных чисел
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция проверки числа на четность
const findEven = () => {
  // Выдаем пользователю случайное число
  const randomRange = getRandomInRange(0, 100);
  console.log(`Question: ${randomRange}`);
  return randomRange % 2 === 0 ? 'yes' : 'no';
};

export default findEven;
