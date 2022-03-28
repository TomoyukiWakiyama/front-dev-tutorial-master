document.addEventListener('DOMContentLoaded', function () {
    const els = document.querySelectorAll('.animate-title');
    const cd = function(entries, observe) {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                // 要素が入ったとき
                const ta = new TextAnimation(entry.target);
                ta.animate();
                observe.unobserve(entry.target);


            } else {
                // 要素が出たとき

            };
        });
    };

    const option = {
        root: null,
        rootMargin: "-300px 0px -300px 0px",
    }
    const io = new IntersectionObserver(cd, option);
    els.forEach(el =>{
        io.observe(el);
    });

});


