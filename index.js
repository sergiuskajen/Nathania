var password = "hssnia147_cantik";

let play = document.querySelector(".start");

var passbox = document.getElementById('password');

function passcheck() {
    if(passbox.value == password) {
        document.getElementById('preweb').style.display="none";
        console.log("right");
    } else {
        alert('Wrong Password !!!');
    }
}
function playMusic() {
    let audio = document.getElementById('music');
    audio.play();
    console.log("play");
}

function unscroll(){
    document.querySelector(".unscroll").classList.remove('unscroll');
}

function start(){
    passcheck();
    playMusic();
    unscroll();
}
