$(document).ready(function () {

    let counterStarted = false;

    function startCounter() {
        $('.counter').each(function () {
            const $this = $(this);
            const target = +$this.attr('data-count');
            let count = 0;
            const speed = target / 150;

            const updateCounter = () => {
                count += speed;
                if (count < target) {
                    $this.text(Math.floor(count));
                    requestAnimationFrame(updateCounter);
                } else {
                    $this.text(target);
                }
            };

            updateCounter();
        });
    }

    // Run counter when section appears on screen
    $(window).on('scroll', function () {
        const section = $('.counting').offset().top - window.innerHeight + 100;

        if ($(window).scrollTop() > section && !counterStarted) {
            counterStarted = true;
            startCounter();
        }
    });

});

const footer = document.querySelector('footer.footer');
const footerToggle = document.getElementById('footerDarkToggle');

// Agar pehle dark mode on tha, load karo
if (localStorage.getItem('footerTheme') === 'dark') {
    footer.classList.add('dark-mode');
    footerToggle.checked = true;
}

// Toggle dark mode on click
footerToggle.addEventListener('change', () => {
    footer.classList.toggle('dark-mode');
    localStorage.setItem(
        'footerTheme',
        footer.classList.contains('dark-mode') ? 'dark' : 'light'
    );
});

