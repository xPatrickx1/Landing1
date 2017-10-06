$(document).ready(function() {
    var $sidebar = $('#mySidenav');
    $('.menu_button').click(function() {

        $(this).toggleClass('expanded').siblings('div').slideToggle();
        $sidebar.addClass('expanded');
    });

    $(window).scroll(function() {
        $('.mov').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+30) {
                $(this).addClass('animation');
            }
            if (imagePos > topOfWindow+screen.height) {
                $(this).removeClass('animation');
            }


        });
    });


    $('#play-video').on('click', function(e){
        e.preventDefault();
        $('#video-overlay').addClass('open');
        $("#video-overlay").append('<iframe width="100%" height="100%" src="../source/GOPR1014.mp4" frameborder="0" allowfullscreen></iframe>');
    });

    $('.video-overlay, .video-overlay-close').on('click', function(e){
        e.preventDefault();
        close_video();
    });

    $(document).keyup(function(e){
        if(e.keyCode === 27) { close_video(); }
    });

    function close_video() {
        $('.video-overlay.open').removeClass('open').find('iframe').remove();
    };


    $(window).scroll(function() {
        $('.mov').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+screen.height-300) {
                $(this).addClass('animation');
            }
            if (imagePos > topOfWindow+screen.height) {
                $(this).removeClass('animation');
            }


        });
    });
});