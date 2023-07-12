import { argv } from 'node:process';

// print process.argv
argv.slice(2).forEach((val, index) => {
  console.log(`${index}: ${val}`);
});