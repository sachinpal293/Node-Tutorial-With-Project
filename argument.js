const minimist = require('minimist');

const argnew = minimist(process.argv.slice(2));
console.log(argnew.name);