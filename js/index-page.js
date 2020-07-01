/**Marqueee */
/**All the class need is to be a block element and overflow = hidden */
$('.notice').marquee({
    //speed in milliseconds of the marquee
    duration: 7000,
    //gap in pixels between the tickers
    gap: 0,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'up',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: false,
    pauseOnHover: true,
    allowCss3Support: true
});
$('.pause').click(function(e){
    e.preventDefault();
    $('.notice').trigger('pause');
});
$('.resume').click(function(e){
    e.preventDefault();
    $('.notice').trigger('resume');
});

/**Event Carousel */
$(document).ready(function () {
    $('.event-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        infinite: true,
        //fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
})

/**News Carousel */
$('.news-carousel').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});