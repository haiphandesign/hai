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




// target elements with the "draggable" class
interact('.draggable')
    .draggable({
        listeners: {
            move: dragMoveListener
        }
    })



function dragMoveListener(event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
    var r = (parseFloat(target.getAttribute('data-r')) || 0)

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px) rotate(' + r + 'deg)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos

window.dragMoveListener = dragMoveListener



document.body.addEventListener('touchmove', function (e) {
    e.preventDefault();
});