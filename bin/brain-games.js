#!/usr/bin/env node
import userGreeting from '../src/cli.js';

console.log("Welcome to the Brain Games!");

const userName = userGreeting();
console.log(`Hello, ${userName}!`);
