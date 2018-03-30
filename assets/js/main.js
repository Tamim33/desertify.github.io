$(document).ready(function () {
    $(window).scrollTop(1);
    $(window).scroll(function (event) {
        var bottom = -500;
        $('.layer-10').css('bottom', bottom);
        var scroll = $(window).scrollTop();
        var scroll_value = ((scroll / 100) * 80);
        var position = bottom + scroll_value;
        $('.layer-10').css('bottom', position);
        $('#log').text(scroll);
//        ----
        var bottom2 = -180;
        $('.layer-9').css('bottom', bottom2);
        var scroll = $(window).scrollTop();
        var scroll_value2 = ((scroll / 100) * 50);
        var position2 = bottom2 + scroll_value2;
        $('.layer-9').css('bottom', position2);
//        ----

        var bottom3 = -180;
        $('.layer-8').css('bottom', bottom3);
        var scroll = $(window).scrollTop();
        var scroll_value3 = ((scroll / 100) * 20);
        var position3 = bottom3 + scroll_value3;
        $('.layer-8').css('bottom', position3);
//        ----
        var bottom4 = -300;
        $('.layer-7').css('bottom', bottom4);
        var scroll = $(window).scrollTop();
        var scroll_value4 = ((scroll / 100) * 10);
        var position4 = bottom4 + scroll_value4;
        $('.layer-7').css('bottom', position4);
//        ----
        var bottom5 = -400;
        $('.layer-6').css('bottom', bottom5);
        var scroll = $(window).scrollTop();
        var scroll_value5 = ((scroll / 100) * 20);
        var position5 = bottom5 - scroll_value5;
        $('.layer-6').css('bottom', position5);
//        ----
        var bottom6 = -100;
        $('.layer-4').css('bottom', bottom6);
        var scroll = $(window).scrollTop();
        var scroll_value6 = ((scroll / 100) * 20);
        var position6 = bottom6 - scroll_value6;
        $('.layer-4').css('bottom', position6);
//        ----
        var bottom7 = 250;
        $('.layer-3').css('bottom', bottom7);
        var scroll = $(window).scrollTop();
        var scroll_value7 = ((scroll / 100) * 15);
        var position7 = bottom7 - scroll_value7;
        $('.layer-3').css('bottom', position7);
//        -----
        var bottom8 = 250;
        $('.layer-2').css('bottom', bottom8);
        var scroll = $(window).scrollTop();
        var scroll_value8 = ((scroll / 100) * 25);
        var position8 = bottom8 - scroll_value8;
        $('.layer-2').css('bottom', position8);

        if (scroll >= 335) {
            $('.joint').css('opacity', '1');
        } else {
            $('.joint').css('opacity', '0');
        }
//        -----
//      STCIK PORTION
        if (scroll >= 699) {
            $('.story-header').css('position', 'fixed');
            $('.story-header').css('top', '0px');
            $('.story-header').css('left', '0px');
            $('.story-board p').css('margin-top','100px');
        } else {
            $('.story-header').css('position', 'static');
            $('.story-header').css('top', '0px');
            $('.story-board p').css('margin-top','50px');
        }
//        ----
        if (scroll >= 1940 && scroll <= 3153) {
            $('.story-header').text('Heading 2');
        } else if (scroll >= 3154 && scroll <= 4416) {
            $('.story-header').text('Heading 3');
        } else if (scroll >= 4417 && scroll <= 5168) {
            $('.story-header').text('Heading 4');
        } else {
            $('.story-header').text('Heading 1');
        }

//      BACK TO TOP PORTION
        if (scroll >= 712) {
            $('.btn').addClass('opacity');
        } else {
            $('.btn').removeClass('opacity');
        }
    });
    $('.btn').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
    $('body').niceScroll({
        scrollspeed: 400,
        zindex: '99999999',
        cursorwidth: "10px"
    });
});
