const MENU = document.querySelector("main");
const LISTA_ARTIGOS = [];
for (i = 0; i < 7; i++) {
    LISTA_ARTIGOS[i] = document.querySelector(`.artigo-${i}`);
}
const DIV = document.querySelector(".div");

console.log(MENU);
console.log(LISTA_ARTIGOS);
console.log(DIV);

function alternarMenuArtigo(numeroArtigo) {
    LISTA_ARTIGOS[numeroArtigo].classList.toggle("escondido")
    MENU.classList.toggle("escondido")
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
    window.scrollTo(0, 1000);
}

function getinnerText() {
    let text = document.getElementById("h5").innerText;
    document.getElementById("mostraInner").innerText = text;
  }
  
  function getinnerHTML() {
    let text = document.getElementById("h5").innerHTML;
    document.getElementById("mostraInner").innerText = text;
  }
  
  function gettextContent() {
    let text = document.getElementById("h5").textContent;
    document.getElementById("mostraInner").innerText = text;
  }