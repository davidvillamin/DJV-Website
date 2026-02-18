let currentIndex = 0;

// Function to update the slider and nav links
function updateSlider(index) {
    currentIndex = index;
    const navLinks = document.querySelectorAll('.landing-services-nav a');
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.landing-slide');
    
    // Move the slider to that specific slide's position
    if (slides[index]) {
        slider.scrollTo({
            left: slides[index].offsetLeft,
            behavior: 'smooth'
        });
    }
    
    // Update nav link highlighting
    navLinks.forEach((nav, i) => {
        if (i === index) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });
}

// Arrow button function
function scrollSlider(direction) {
    let newIndex = currentIndex + direction;
    const totalSlides = document.querySelectorAll('.landing-slide').length;
    
    // Loop logic: back to start or jump to end
    if (newIndex >= totalSlides) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = totalSlides - 1;
    }
    
    updateSlider(newIndex);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.landing-services-nav a');
    
    // Nav link click handler
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            // Prevent the "#" from jumping the page to the top
            e.preventDefault();
            
            // Update slider to the clicked nav link's index
            updateSlider(index);
        });
    });
});