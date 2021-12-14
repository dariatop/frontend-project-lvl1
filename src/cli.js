import readlineSync from 'readline-sync';

const userGreeting = () => readlineSync.question('May I have your name? ');
export default userGreeting;
