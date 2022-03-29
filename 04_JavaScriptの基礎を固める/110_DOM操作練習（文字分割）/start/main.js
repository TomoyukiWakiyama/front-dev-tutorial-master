document.addEventListener('DOMContentLoaded', function(){
    const el = document.querySelector('.animate-title');
    // HTML要素を取得する
    // trimで前後の空白を取り除く
    // splitで配列として一文字ずつ格納する
    const str = el.innerHTML.trim().split("");
    const result = str.reduce((accu, curr) => {
        curr = curr.replace(' ', '&nbsp;');
        return accu + `<span class="char">${curr}</span>`;
    }, '');

    el.innerHTML = result;
    console.log(result);
});