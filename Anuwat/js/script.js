$(document).ready(function(){
    $('.lineup__slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: false,
    });

    $('a[href^=#]').on('click',function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position - 30}, speed, "swing");
        return false;
    });
});