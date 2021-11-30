//comandline  - process.argv
const { argv } = require('process');

//input - timers -as an array of strings
//sort timers
const delays = argv.slice(2).map(element => Number(element) * 1000).sort((a,b) => a - b);
//if the input is --> empty,
if (delays.length === 0) {
  return false;
}
let i = 0;
while (i < delays.length) {
  //if the input is -->negative number example -3, -4; not a number like 'e' 'r'
  if (!isNaN(delays[i]) && delays[i] > 0) {
    //flash the input at the given intervals
    setTimeout(() => process.stdout.write('\x07'), delays[i]);
  }
  i++;
}
