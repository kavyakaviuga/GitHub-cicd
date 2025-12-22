const sum = require('../src/sum');

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(message);
  }
}

assertEqual(sum(2, 3), 5, 'sum(2,3) should equal 5');

console.log('All tests passed');
