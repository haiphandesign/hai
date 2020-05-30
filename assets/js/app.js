window.onload = function () {
    heroHeight();
}

function heroHeight() {
    var windowHeight = $(window).outerHeight();
    $("body").css("min-height", windowHeight);
}


$('.toggle').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
});


let mouseCursor = document.querySelector('.cursor-wrapper');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    var mouseCursorX = e.pageX + 'px';
    var mouseCursorY = e.pageY + 'px';
    $('.cursor-wrapper').css('transform', 'translate3d(' + mouseCursorX + ',' + mouseCursorY + ', 0)');
    $('.cursor-wrapper').css('opacity', '1');
}

$('.cursor\\:link').mouseover(function () {
    $('.cursor').addClass('cursor:over');
});

$('.cursor\\:link').mouseout(function () {
    $('.cursor').removeClass('cursor:over');
});

$('a').mouseover(function () {
    $('.cursor').addClass('cursor:over');
});

$('a').mouseout(function () {
    $('.cursor').removeClass('cursor:over');
});