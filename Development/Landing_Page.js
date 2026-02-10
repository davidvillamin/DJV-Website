$(document).ready(function() {
    $('.arrow').click(function() {
        // Get the slider element
        const $slider = $('#slider');
        // Determine the width of one slide
        const scrollAmount = $slider.width();
        
        // Check if it's the right or left arrow
        const direction = $(this).hasClass('right-arrow') ? 1 : -1;

        // Animate the scroll
        $slider.animate({
            scrollLeft: $slider.scrollLeft() + (direction * scrollAmount)
        }, 500); // 500ms for a smooth slide
    });
});