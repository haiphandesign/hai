window.onload = function () {
    heroHeight();
}

function heroHeight() {
    var windowHeight = $(window).outerHeight();
    $("body").css("min-height", windowHeight);
}


$('.toggle').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
    } else {
        $('.navbar-toggle').removeClass('is-active');
        $(this).addClass('is-active');
    }
});