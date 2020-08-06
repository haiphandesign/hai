// PAGE HEIGHT

window.onload = function () {
    fullHeight();
}

function fullHeight() {
    var windowHeight = $(window).outerHeight();
    $("body").css("min-height", windowHeight);
    $("body").css("max-height", windowHeight);
    $("body").css("height", windowHeight);
}



// INDEX BG

$(function () {
    $('.background').addClass('is-active');
});



// TOGGLE

$('.toggle').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
});



// CURSOR

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



// STICKERS

function stickerRandomizer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$('.sticker').each(function () {
    let x = stickerRandomizer(-5, 80);
    let y = stickerRandomizer(-5, 80);
    let z = stickerRandomizer(1, 10);
    let rotate = stickerRandomizer(-30, 30);
    $(this).css({
        'top': x + '%',
        'left': y + '%',
        'z-index': z,
        'transform': 'rotate(' + rotate + 'deg)',
    });
});

$('.sticker').draggable({
    stack: '.sticker'
});