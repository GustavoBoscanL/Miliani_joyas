window.addEventListener('scroll', function() {
    const testimonios = document.querySelectorAll('.testimonial');

    testimonios.forEach(function(testimonial) {
        const position = testimonial.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            testimonial.classList.add('show');
        }
    });
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
