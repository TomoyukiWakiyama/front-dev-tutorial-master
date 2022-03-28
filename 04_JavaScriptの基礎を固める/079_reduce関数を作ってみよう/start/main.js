/* 値の設定 */
const str = 'Animation';
const strArry = str.split('');

/* 文字を<>で囲んで結合する */
function tag(accu, curr) {
    // console.log(accu);
    return `${accu}<${curr}>`;
}

/* reduce関数 */

// 第１引数：呼び出す値（配列）
// 第２引数：関数の呼び出し
// 第３引数：初期値
function reduce(arry, callback, defaultValue){
    let accu = defaultValue;
    for(let i = 0; i < arry.length; i++){
        let curr = arry[i];
        accu = callback(accu, curr); // tag関数を使用する
    }
    return accu;
}

/* reduce関数の実行 */
const result = reduce(strArry, tag, "");
/* 結果の表示 */
console.log(result);