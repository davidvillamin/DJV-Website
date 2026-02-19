document.addEventListener('DOMContentLoaded', function () {
    const carouselEl = document.querySelector('#landing-services-carousel');
    const navLinks = document.querySelectorAll('.service-nav-link');
    
    // 1. Initialize Bootstrap Carousel Instance
    const carousel = new bootstrap.Carousel(carouselEl);

    // 2. Sync Nav Links -> Carousel (When you click a link)
    navLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            carousel.to(index); // Tells Bootstrap to slide to this index
        });
    });

    // 3. Sync Carousel -> Nav Links (When the slide changes via Arrows or Auto)
    carouselEl.addEventListener('slide.bs.carousel', function (event) {
        // 'event.to' is the index of the slide the carousel is moving to
        const activeIndex = event.to;

        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add active class to the current link
        if (navLinks[activeIndex]) {
            navLinks[activeIndex].classList.add('active');
        }
    });
});