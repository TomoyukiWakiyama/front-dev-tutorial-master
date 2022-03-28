const btn = document.querySelector('#btn');

const changeColor = function() {
    this.style.color = 'red';
}
function changeBackground() {
    this.style.backgroundColor = 'blue';
}
btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBackground);