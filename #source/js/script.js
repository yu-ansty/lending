@@include('slick.min.js')

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header-top__navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header-top__body').click(function (event) {
        $('.header-top__navigation').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.container-one').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 490,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
