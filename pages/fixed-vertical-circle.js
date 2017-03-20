$(function() {
    var windowHeight = $(window).height();
    $('section').height(windowHeight);

    // var checkActive = function() {
    //     var screenCenter = $(window).scrollTop + $(window).height()/2;

    //     $('section').each(function() {
    //         sectionTop = $(this).offset().top;
    //         selectedSection = $('nav a').index($('a[href="#'+$(this).attr('id')+'"]'));
    //         console.log(selectedSection);
    //         if(sectionTop < screenCenter && sectionTop + $(this).height() >= screenCenter) {
    //             $('nav li').eq(selectedSection).addClass('active');
    //         } else {
    //             $('nav li').eq(selectedSection).removeClass('active');
    //         }
    //     });
    // }

    // checkActive();

    // $('nav a').click(function(e) {
    //     e.preventDefault();
    //     var dest = $(this.hash);
    //     $('body').animate({scrollTop: $(dest).offset().top});
    // });

    // $(window).scroll(function() {
    //     checkActive();
    // })
});
