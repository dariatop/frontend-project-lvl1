import readlineSync from 'readline-sync';

const userGreeting = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
export default userGreeting;
