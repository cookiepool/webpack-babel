import 'core-js';
import "regenerator-runtime/runtime"

let a = `hello, can you hear me!`;

let func = () => {
    console.log('这是箭头函数');
}

let b = [1, 2, 3];
let c = [...b];

let array = [1];
 
 
console.log(array);

let promise_t = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(233);
    }, 2000)
});

promise_t.then((res) => {
    console.log(res);
})

class Test {
    constructor(name) {
        this.name = name;
    }

    print() {
        console.log(this.name);
    }
}

let t_t = new Test('xiaohong');
t_t.print();

