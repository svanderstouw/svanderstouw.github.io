const navLinks = document.querySelectorAll('.navText');
for (link of navLinks) {
    const sectionSelector = link.getAttribute('href');
    link.setAttribute('href', '');
    const section = document.querySelector(sectionSelector);
    link.onclick = function(event) {
        event.preventDefault();
        const navbarHeight = document.getElementById('navBar').offsetHeight;
        window.scrollTo({
            top: section.offsetTop - (0.66 * navbarHeight),
            behavior: 'smooth',
        });
    }
}