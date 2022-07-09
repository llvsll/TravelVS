$(function(){

    /*Slider*/
    $('.photos__inner').slick({
        nextArrow: ' <button type="button" class="slick-btn slick-next"></button>',
        prevArrow: ' <button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
    });

    /*Menu*/
    $('.header__btn-menu').on('click',function(){
        $('.nav ul').slideToggle();
    });
});

