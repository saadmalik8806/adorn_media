function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-links-active');
}
$(document).ready(function(){
    $('.card-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}


document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 800, // Duration of the animation in milliseconds
        easing: 'ease-in-out', // Easing function for the animation
        once: true, // Whether animation should happen only once - while scrolling down
    });
});
