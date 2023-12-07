
// Hamburger Menu Items Starts Here
let menuItems = document.querySelector('.nav_wrap')
let hamburgerMenu = document.querySelector('.hamburger-menu')
let showSate = false
hamburgerMenu.addEventListener('click', function () {
    showSate = !showSate
    console.log(showSate)
    if (showSate) {
        menuItems.setAttribute('id', 'hamburger-menu-items')
    } else {
        menuItems.setAttribute('id', '')
    }
})

// Image Carousel Starts Here
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const translateValue = -currentSlide * 100 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}
