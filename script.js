const animated = document.querySelectorAll('.fade-in');
const obs = new IntersectionObserver(e=>{
    e.forEach(el=>{
        if(el.isIntersecting) el.target.classList.add('show');
    })
},{threshold:.2});
animated.forEach(a=>obs.observe(a));
