/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });

});

/* ==========================================
   HEADER SHADOW ON SCROLL
========================================== */

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            '0 10px 30px rgba(0,0,0,0.25)';

    } else {

        header.style.boxShadow = 'none';

    }

});

/* ==========================================
   FADE-IN ANIMATION
========================================== */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

            }

        });

    },

    {
        threshold: 0.15
    }

);

document.querySelectorAll(
    '.snapshot-card, .initiatives-card, .impact-card, .passion-card, .linkedin-card'
).forEach(el => {

    el.classList.add('fade-in');

    observer.observe(el);

});

/* ==========================================
   METRIC COUNTERS
========================================== */

const counters = document.querySelectorAll('.metric h4');

const counterObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const element = entry.target;

            const text = element.innerText;

            const targetValue = parseInt(
                text.replace(/\D/g, '')
            );

            let current = 0;

            const increment =
                Math.max(1, Math.ceil(targetValue / 60));

            const timer = setInterval(() => {

                current += increment;

                if (current >= targetValue) {

                    current = targetValue;

                    clearInterval(timer);

                }

                if (text.includes('K+')) {

                    element.innerText = current + 'K+';

                } else if (text.includes('+')) {

                    element.innerText = current + '+';

                } else {

                    element.innerText = current;

                }

            }, 20);

            counterObserver.unobserve(element);

        });

    },

    {
        threshold: 0.4
    }

);

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* ==========================================
   CURRENT YEAR FOOTER
========================================== */

const footer = document.querySelector('footer');

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Amit Chawla. All Rights Reserved.`;

}
