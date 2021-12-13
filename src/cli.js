import readlineSync from 'readline-sync';
const userGreeting = () => {
    return readlineSync.question('May I have your name? ');
}
export default userGreeting;