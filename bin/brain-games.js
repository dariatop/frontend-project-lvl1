#!/usr/bin/env node
import userGreeting from '../src/cli.js';
import askQuestion from './brain-even.js';

console.log('Welcome to the Brain Games!');

const userName = userGreeting();
console.log(`Hello, ${userName}!`);

askQuestion(userName);
