$(document).ready(function() {

    $('.menu_button').click(function() {
        $(this).toggleClass('expanded').siblings('div').slideToggle();
    });

});