var slideIndex = 1;
move(slideIndex);

function plusSlides(n) {
    move(slideIndex += n);
}

function currentSlide(n) {
    move(slideIndex = n);
}

function move(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('move-left');
        slides[i].classList.remove('move-again');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].classList.remove('move-left');
    slides[slideIndex-1].classList.add('move-again');
    dots[slideIndex-1].className += " active";
}

var paused = false,
    interval = setInterval(function() {
        (!paused) && $('#next').trigger('click');
    },5000);
$('.next, .prev , .dot').hover(function() {
    paused = true;
},function() {
    paused = false;
});