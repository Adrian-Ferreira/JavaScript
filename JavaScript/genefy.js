var numMusica = 0;
var pause =0;

function tocaAnterior() {
    numMusica--;
    if (numMusica < 0) {
        numMusica = 3;
        document.getElementById("mymusic").pause();
        document.getElementById("mymusic").src = "./Musica" + numMusica + ".mp3";
        document.getElementById("mymusic").play();
    }
    else {
        document.getElementById("mymusic").pause();
        document.getElementById("mymusic").src = "./Musica" + numMusica + ".mp3";
        document.getElementById("mymusic").play();
    }
}
function tocaAtual() {
    console.log("musica atual = " + document.getElementById("mymusic").src);

    document.getElementById("mymusic").src = "./Musica" + numMusica + ".mp3";
    document.getElementById("mymusic").currentTime = pause;
    document.getElementById("mymusic").play();
    console.log("ah... chato!");
}
function paraTudo() {
    pause =document.getElementById("mymusic").currentTime;
    document.getElementById("mymusic").pause();

}
function tocaProxima() {
    numMusica++;
    if (numMusica > 3) {
        numMusica = 0;
        document.getElementById("mymusic").pause();
        document.getElementById("mymusic").src = "./Musica" + numMusica + ".mp3";
        document.getElementById("mymusic").play();
    }
    else {
        document.getElementById("mymusic").pause();
        document.getElementById("mymusic").src = "./Musica" + numMusica + ".mp3";
        document.getElementById("mymusic").play();

    }
}