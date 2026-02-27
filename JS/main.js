const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    for (let elem of revealElements) {
        const windowHeight = window.innerHeight;
        const elementTop = elem.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            elem.classList.add('active');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);