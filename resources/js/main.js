/*sticky menu*/
$(".js-function").waypoint(function (direction) {
    if (direction == "down") {
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky");
    }
});

/*owl carosel*/

/*smooth-scroll*/
$('a').smoothScroll();


/*hamburger - menu*/


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/*cunter js*/

$('.counter').counterUp({
    delay: 5,
    time: 1500
});






/*mixitup js*/


var mixer = mixitup('.grid-work-col-4');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});


