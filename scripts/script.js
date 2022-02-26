const MENU = document.querySelector("main");
const LISTA_ARTIGOS = [];
for (i = 0; i < 7; i++) {
    LISTA_ARTIGOS[i] = document.querySelector(`.artigo-${i}`);
}

function acessarArtigo(numeroArtigo) {
    LISTA_ARTIGOS[numeroArtigo].classList.remove("escondido")
    MENU.classList.add("escondido")
}

function voltarMenuPrincipal(numeroArtigo) {
    LISTA_ARTIGOS[numeroArtigo].classList.add("escondido")
    MENU.classList.remove("escondido")
}

function avancarArtigo(numeroArtigo) {
    LISTA_ARTIGOS[numeroArtigo].classList.add("escondido")
    LISTA_ARTIGOS[numeroArtigo+1].classList.remove("escondido")
}

function voltarArtigo(numeroArtigo) {
    LISTA_ARTIGOS[numeroArtigo].classList.add("escondido")
    LISTA_ARTIGOS[numeroArtigo-1].classList.remove("escondido")
}
// const ULTIMA_IMAGEM = LISTA_ARTIGOS[1].childNodes[NUMERO];

function descaAteOFinal() {
    window.scrollTo(0, 5000);
}