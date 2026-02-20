function updateNav(position, element, section) {
    // 1. Move the blue line
    const navLine = document.getElementById('nav-line');
    if (navLine) navLine.style.left = position;

    // 2. Reset navigation link colors
    const links = document.querySelectorAll('#custom-nav .nav-link');
    links.forEach(link => {
        link.classList.remove('text-info', 'fw-bold');
        link.classList.add('text-white-50');
    });

    // 3. Highlight current link
    element.classList.add('text-info', 'fw-bold');
    element.classList.remove('text-white-50');

    // 4. Get the containers
    const acronym = document.getElementById('acronym-container');
    const mission = document.getElementById('mission-content');
    const vision = document.getElementById('vision-content');

    // 5. HIDE ALL (Ensures no overlap and resets spacing)
    acronym.style.display = 'none';
    mission.style.display = 'none';
    vision.style.display = 'none';

    // 6. SHOW ONLY THE ONE CLICKED
    if (section === 'values') {
        acronym.style.display = 'flex'; // Flex for centering the acronym
    } else if (section === 'mission') {
        mission.style.display = 'block';
    } else if (section === 'vision') {
        vision.style.display = 'block';
    }
}