window.onload = function () {
    heroHeight();
}

function heroHeight() {
    var windowHeight = $(window).outerHeight();
    $("body").css("min-height", windowHeight);
}



// $(function () {
//     $(".sticker").draggable({
//         containment: "body.page",
//         scroll: false
//     });
// });