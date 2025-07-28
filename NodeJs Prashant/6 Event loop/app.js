// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout callback executed');
// }, 1000);

// setInterval(() => {
//   console.log('Interval callback executed');
// }, 2000);

// console.log('End');


// setTimeout(() => {
//   console.log('Timeout executed');
// }, 0);

// setImmediate(() => {
//   console.log('Immediate executed');
// });



console.log('Start');

setTimeout(() => console.log('setTimeout 0ms'), 0);

setImmediate(() => console.log('setImmediate'));

process.nextTick(() => console.log('process.nextTick'));

Promise.resolve().then(() => console.log('Promise.then'));

console.log('End');


