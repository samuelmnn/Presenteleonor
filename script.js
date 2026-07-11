const musica = document.getElementById("minhamusica");
const botao = document.getElementById("btnPlay");
const textoBotao = document.getElementById("textoBotao");
let tocando = false;

musica.volume = 0.12;

function tocarMusica(){
    textoBotao.style.opacity = 0;


    setTimeout(() => {
    if (!tocando) {
        musica.play();
        botao.innerHTML = "⏸ Pausar";
    } else {
        musica.pause();
        botao.innerHTML = "▶ Tocar Musiguinha";
    }
    tocando = !tocando;
    textoBotao.style.opacity = 1;
} , 200);
}
