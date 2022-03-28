// const arry = [1,2,3,4,5];
// arry.reduce(function(accu, curr){
//     console.log(accu, curr);
//     return accu + curr;
// });

const str = 'Animation';
// 文字列を一文字ずつ要素として格納する
const strArry = str.split('');

// 一文字ずつ
const result = strArry.reduce((accu, curr) => {
    return accu + `<${curr}>`;
}, "");

console.log(result);
