$(function(){
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="/AVTR/img/left.svg" alt="">',
        nextArrow: '<img class="arrow arrow-right" src="/AVTR/img/right.svg" alt="">',
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1
                }
            }
        ]
    });
})  