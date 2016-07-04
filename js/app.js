$(function () {
    var countup = function () {
        console.log('Q');
        setTimeout(countup, 2000);
    };
    $(window).on('load', function () {
        $('.flexslider').flexslider({
            animation: 'slide',
            start: function () {
                console.log('load');
                countup();
            }
        });
    });

});