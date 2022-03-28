
let el = '';
// h1のidタグから要素を取得する
el = document.querySelector('#main-title');
// html情報を書き換える
el.innerHTML = '<span style="color: blue">BLUE TITLE</span>';
// テキスト情報のみ書き換える
el.textContent = 'TEXT CHANGE';
// スタイル属性を変更する
el.style.color = 'red';

// 新規にクラスを追加する
el.classList.add('inview');
// クラスを削除する
el.classList.remove('destroy');
// 追加や削除を繰り返す(true <-> false)
el.classList.toggle('consent');