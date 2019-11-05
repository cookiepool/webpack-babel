import _ from 'lodash';

let a = `hello, can you hear me!`;

let func = () => {
    console.log('这是箭头函数');
}

let b = [1, 2, 3];
let c = [...b];

let array = [1];
let other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
 
console.log(array);
