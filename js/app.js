$(function () {
    var countup = function () {
        console.log('Q');
        $('.flexslider').flexslider('next')
        setTimeout(countup, 2000);
    };
    $(window).on('load', function () {
        $('.flexslider').flexslider({
            animation: 'slide',
            start: function () {
                console.log('loaded');
                countup();
            }
        });
    });
    $('.flexslider').on('hover', () => {
        console.log('hover');
    });

});