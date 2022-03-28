const btn = document.querySelector('#btn');
const hello = function () { 
    this.style.color = 'red';
 };
btn.addEventListener('click', hello);
// btn.addEventListener('mouseover', hello);