// $(document).ready(function() {
//     $('.arrow').click(function() {
//         // Get the slider element
//         const $slider = $('#slider');
//         // Determine the width of one slide
//         const scrollAmount = $slider.width();
        
//         // Check if it's the right or left arrow
//         const direction = $(this).hasClass('right-arrow') ? 1 : -1;

//         // Animate the scroll
//         $slider.animate({
//             scrollLeft: $slider.scrollLeft() + (direction * scrollAmount)
//         }, 500); // 500ms for a smooth slide
//     });
// });

<script>
    {/* Hamburger Menu */}
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    {/* 2. Services Slider & Navigation Sync Logic */}
    const serviceLinks = document.querySelectorAll('.services-nav a');
    const sliderWrapper = document.getElementById('slider');
    let currentIndex = 0;

    function updateSlider(index) {
        currentIndex = index;
        const slide = sliderWrapper.querySelector('.slide');
        const slideWidth = slide.clientWidth;

        // Move the slider
        sliderWrapper.scrollTo({
            left: currentIndex * slideWidth,
            behavior: 'smooth'
        });

        // Update the Nav Bar Highlight
        serviceLinks.forEach(link => link.classList.remove('active'));
        serviceLinks[currentIndex].classList.add('active');
    }

    {/* Arrow Button Function (Fixed) */}
    function scrollSlider(direction) {
        let newIndex = currentIndex + direction;

        // Loop logic: if at end, go to start; if at start, go to end
        if (newIndex >= serviceLinks.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = serviceLinks.length - 1;
        }

        updateSlider(newIndex);
    }

    {/* Nav Link Click Events (When you click the text) */}
    serviceLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            updateSlider(index);
        });
    });

    {/* Optional: Keep slider in sync if window is resized */}
    window.addEventListener('resize', () => updateSlider(currentIndex));
    {/* ADD THIS NEW "WATCHER" CODE: */}
    sliderWrapper.addEventListener('scroll', () => {
        {/* 1. Get the width of one slide */}
        const slideWidth = sliderWrapper.offsetWidth;

        {/* 2. Calculate which slide is currently visible (0, 1, 2, etc.) */}
        const currentScroll = sliderWrapper.scrollLeft;
        const newIndex = Math.round(currentScroll / slideWidth);

        {/* 3. Update the global 'currentIndex' so arrows keep working correctly */}
        currentIndex = newIndex;

        {/* 4. Update the Blue Active Line */}
        serviceLinks.forEach((link, index) => {
            if (index === newIndex) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
</script>