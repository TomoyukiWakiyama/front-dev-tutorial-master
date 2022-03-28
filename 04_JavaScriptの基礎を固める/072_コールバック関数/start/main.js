// function hello(callback, second) {
//     console.log('hello ' + callback(second));
// }

// function getName(){
//     return 'Tomoyuki Wakiyama';
// }

// hello(function(name) {
//     return 'mumei ' + name;
// }, 'Faufau');

function doSomething(a, b, callback) {
    const result = callback(a, b);
    console.log(result);
}

function multiply(a, b) {
    return a * b;
}

function plus(a, b) {
    return a + b;
}

doSomething(3, 6, multiply);
doSomething(3, 6, plus);