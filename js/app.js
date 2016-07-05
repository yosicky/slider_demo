$(function () {
    var count = 0;
    var countUpId = null
    var timerId = null;
    var countup = function () {
        count += 1000/30;
        console.log('Q');
        console.log(count);
        countUpId = setTimeout(countup, 1000/30);
        if (count >= 5000) {
            count = 0;
//            clearTimeout(timerId);
            console.log('Time!');
            $('.flexslider').flexslider('next');
        }
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

    var counter = function () {
        count += 1000/30;
        console.log(count);
        timerId = setTimeout(counter, 1000/30);
        if (count >= 5000) {
            count = 0;
//            clearTimeout(timerId);
            console.log('Time!');
        }
    };
//    counter();

    $('.flexslider').on('mouseover', () => {
        console.log('hover');
        clearTimeout(countUpId);
//        clearTimeout(timerId);
        console.log(count);
    });
    $('.flexslider').on('mouseleave', () => {
        console.log('leave');
        countup();
//        counter();
        console.log(count);
    });


});