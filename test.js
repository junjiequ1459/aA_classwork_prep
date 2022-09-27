console.log("hello world");
console.log(2);
console.log(2 + 2);
console.log(2 + 5);
console.log(10 - 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(9 % 2);
console.log(10 % 2);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || !false);
console.log(10 > 10);
console.log(10 < 10);
console.log(25 >= 5);
console.log(25 >= 25);
console.log(12 === 11);
console.log(12 !== 11);
console.log(12 === '12');
// parenthesis (), exponenets Math.pow(b,e), multiplication *, module %, division /, substraction -, addition +
// strings can be in " ", ' ' 
let str = 'hello';
console.log(str[1]);
console.log('hello'[1]);
console.log('hello'.length);
console.log(str.length);
console.log(str.indexOf('h'));
console.log(str.indexOf('l'));
console.log(str.indexOf('x'));
console.log(str.indexOf('hell'));
let x = 'race';
let y = 'car';
console.log(x.concat(y));
console.log(4 + 'hi');
console.log(4 * 'hi');
console.log(4 * '10');
console.log(4 + '10');
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice());
console.log(str.slice(1));
console.log(str.slice(1, 3));
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.slice(1);
console.log(arr2);
let fruit = 'apple';
fruit = 'pear';
console.log(fruit);
let firstName = 'Timothy';
let lastName = 'Dong';
function Num(number) {
    if (20 === number) {
        console.log('they equal');
    } else {
        console.log('not equal');
    }
};
Num(2);
function value(num) {
    if (num === 20) {
        console.log('equal')
    } else if (num > 20) {
        console.log('greater than 20')
    } else {
        console.log('less than 20')
    }
};
value(10);
//false undefined, null, Nan, false, 0, -0