document.addEventListener('DOMContentLoaded', function(){
    const el = document.querySelector('.animate-title');
    const str = el.innerHTML.trim().split("");

    el.innerHTML = str.reduce(function(acc, curr){
        curr = curr.replace(' ', '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
    }, "");


    // let concatStr = '';

    // for(let c of str){
    //     c = c.replace(' ', '&nbsp;');
    //     concatStr += `<span class="char">${c}</span>`;
    // }
    // el.innerHTML = concatStr;
});