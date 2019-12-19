/**Marqueee */
/**All the class need is to be a block element and overflow = hidden */
$('.notice').marquee({
    //speed in milliseconds of the marquee
    duration: 5000,
    //gap in pixels between the tickers
    gap: 50,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'up',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: false,
    pauseOnHover: true,
    allowCss3Support: true
});
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