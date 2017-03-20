$(function() {
    var navigation = $('nav');
    var navPosition = navigation.offset().top;
    var navWidth = $(window).width();
    var content = $('section');

    var isMobile = function() {
        return ($(window).width() < 600);
    };

    // trigger menu on mobile
    $('.mobile-nav-trigger').click(function() {
        $('nav ul').toggleClass('visible');
    });

    // make sure navWidth preserves width on resize
    $(window).resize(function() {
        navWidth = $(this).width();
        navigation.width(navWidth);
    });

    var setNavFixed = function() {
        navigation.width(navWidth);
        if($(this).scrollTop() >= navPosition) {
            navigation.addClass('fixed');
        } else {
            navigation.removeClass('fixed');
        }
    };

    $(window).scroll(function() {
        if(!isMobile()) {
            setNavFixed();
        }
        // mobile not working correctly so disabled for now
        // setNavFixed();
    });
});