/**Main Carousel */
$(document).ready(function() {
    $('.main-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear'
    });
});

/**Event Carousel */
$(document).ready(function() {
    $('.event-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear'
    })
})