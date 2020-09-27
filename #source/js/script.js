$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header-top__navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header-top__body').click(function (event) {
        $('.header-top__navigation').removeClass('active');
        $('body').removeClass('lock');
    });
});