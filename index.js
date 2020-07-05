let a = 100;
const b = 200;

console.log(a, b);

let func = () => {
  console.log('箭头函数！');
}

func();

const isHas = [1,2,3].includes(2);

const p = new Promise((resolve, reject) => {
  resolve(100);
});

class Animal {
  constructor() {
    
  }

  say() {
    console.log('lalala!');
  }
}

let dog = new Animal();
dog.say();

function delayFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(2333);
    }, 2000)
  });
}

async function testTwo() {
  console.log('start');
  let awaitValue = await delayFunc().catch((err) => {
    console.log(err);
  });
  console.log('end');

  return awaitValue;
}

testTwo().then((res) => {
  console.log(res);
});