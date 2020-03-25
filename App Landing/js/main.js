$(function () {
    $('.app-sliders').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
		autoplay: true,
        autoplaySpeed: 2000,
	arrows: false,
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                arrows: false
                }
            },
            {
                breakpoint: 680,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
                }
            }
        ]
    });

    $('.btn__menu').on('click', function(){
        $('.menu__list').slideToggle();
    });

});
