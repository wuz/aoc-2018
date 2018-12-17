var fs = require('fs');

const hash = {};

fs.readFile('./numbers.txt', 'utf8', function(err, contents) {
  const lines = contents.split('\n');
  let current = 0;
  let i = 0;
  while(true) {
    if(i === lines.length-1) {
      i = 0;
    }
    const line = lines[i];
    const old = current;
    const num = Number(line)
    current += num;
    if(hash[current]) {
      console.log(current);
      break;
    }
    hash[current] = true;
    console.log(old, '+', num, '->', current);
    i++;
  }
});
