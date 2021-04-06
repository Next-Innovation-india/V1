var slideIndex = 1;

document.getElementById("s2").style.display = "block";

move_r(slideIndex);

function NextSlides(n) {
    move_r(slideIndex += n);
}

function PrevSlides(n) {
    move_l(slideIndex += n);
}

function currentSlide(n) {
    if (n == 1) {move_l(slideIndex = n);}
    if (n == 2) {move_r(slideIndex = n);}
}

function move_l(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('move-r-again');
        slides[i].classList.remove('move-right');
        slides[i].classList.add('move-left');
        slides[i].classList.remove('move-l-again');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].classList.remove('move-left');
    slides[slideIndex-1].classList.add('move-l-again');
    dots[slideIndex-1].className += " active";
}

function move_r(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('move-left');
        slides[i].classList.remove('move-l-again');
        slides[i].classList.add('move-right');
        slides[i].classList.remove('move-r-again');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].classList.remove('move-right');
    slides[slideIndex-1].classList.add('move-r-again');
    dots[slideIndex-1].className += " active";
}

var paused = false,
    interval = setInterval(function() {
        (!paused) && $('#next').trigger('click');
    },5000);


$('.next, .prev , .dot , .btn , .btn3').hover(function() {
    paused = true;
},function() {
    paused = false;
});

var flag = false;

$('.paly-video').hover(function() { paused = true; },palyvid());

function palyvid(){
    if (!flag) { paused = false; }
}

document.getElementById("play-video").addEventListener("click", function(){ flag = true; paused = true; });
document.getElementById("play-video1").addEventListener("click", function(){ flag = true; paused = true; });
document.getElementById("closevid").addEventListener("click", function(){ paused = false; });