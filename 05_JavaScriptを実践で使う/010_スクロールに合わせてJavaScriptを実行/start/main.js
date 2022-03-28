const child = document.querySelector('.child');
const cd = function(entries, observe) {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            // 要素が入ったとき
            console.log('inview');

            // 一回しか動作させたくない（監視をやめたい）場合
            // observe.unobserve(entry.target);

            entry.target.classList.add('inview');
        } else {
            // 要素が出たとき
            console.log('outview');

            entry.target.classList.remove('inview');
        };
    });
};

const option = {
    root: null,
    rootMargin: "-300px 0px -300px 0px",
}
const io = new IntersectionObserver(cd, option);
io.observe(child);
