const compose = (...fns) => x =>
  fns.reduce((acc, fn) => fn(acc), x);

const add1 = x => x + 1;//11
const mul2 = x => x * 2;//22
const sub3 = x => x - 3;//19

const fn = compose(add1, mul2, sub3);

console.log(fn(10)); //17