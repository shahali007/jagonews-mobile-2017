$(document).ready(function () {
    // scroll to top
    $(function(){
        $(document).on( 'scroll', function(){
            if ($(window).scrollTop() > 100) {
                $('.scroll-top-wrapper').addClass('show');
            } else {
                $('.scroll-top-wrapper').removeClass('show');
            }
        });
        $('.scroll-top-wrapper').on('click', scrollToTop);
    });

    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    }


    // menu icon change on toggle
    $("#nav .navbar-toggle").click(function(){
        $(".icon-bar").toggle();
        $(".fa-close").toggle();
    });


    // search toggle
    $("#search").click(function(){
        $("#form").fadeIn();
    });
    $("#search-close").click(function(){
        $("#form").fadeOut();
    });


    // footer add toggle
    $(".btn-toggle").click(function(){
        $(".footer-ad img").slideToggle();
        $(".btn-toggle .fa-minus").toggle();
        $(".btn-toggle .fa-plus").toggle();
    });

}); 