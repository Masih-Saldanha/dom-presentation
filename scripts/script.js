const MENU = document.querySelector("main");

const LISTA_ARTIGOS = [];
for (i = 0; i < 7; i++) {
    LISTA_ARTIGOS[i] = document.querySelectorAll(`article`)[i];
}

const BODY = document.querySelector("body");

const LISTA_ARTIGOS_NODE = document.querySelectorAll("article");

console.log(`Constante BODY: document.querySelector("BODY")`);
console.log(BODY);
console.log(`Constante MENU: document.querySelector("main")`);
console.log(MENU);
console.log(`Constante LISTA_ARTIGOS: LISTA_ARTIGOS[i] = document.querySelectorAll("article")[i]`);
console.log(LISTA_ARTIGOS);
console.log(`Constante LISTA_ARTIGOS_NODE: LISTA_ARTIGOS_NODE = document.querySelectorAll("article")`);
console.log(LISTA_ARTIGOS_NODE);

function alternarMenuArtigo(numeroArtigo) {
    LISTA_ARTIGOS[numeroArtigo].classList.toggle("escondido");
    MENU.classList.toggle("escondido");
    window.scrollTo(0, 0);
}

function avancarArtigo(numeroArtigo) {
    LISTA_ARTIGOS[numeroArtigo].classList.add("escondido");
    LISTA_ARTIGOS[numeroArtigo + 1].classList.remove("escondido");
    window.scrollTo(0, 0);
}

function voltarArtigo(numeroArtigo) {
    LISTA_ARTIGOS[numeroArtigo].classList.add("escondido");
    LISTA_ARTIGOS[numeroArtigo - 1].classList.remove("escondido");
    window.scrollTo(0, 0);
}

function trocarCorDeFundo(escuro, claro) {
    if (BODY.style.backgroundColor === claro) {
        BODY.style.backgroundColor = escuro;
    } else {
        BODY.style.backgroundColor = claro;
    }
}

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

function listarTextoDosTitulos(array) {
    let arrayFiltrado = array.map((node) => {
        const listaDeTitulos = document.getElementById(`tiulos`);
        if (listaDeTitulos.childElementCount < array.length) {
            const ITEM = document.createElement("li");
            ITEM.innerText = node.children[0].innerText;
            listaDeTitulos.appendChild(ITEM);
        }
        return (node.children[0].innerText);
    });
    console.log(arrayFiltrado);
    window.scrollTo(0, 2000);
}

function adicionarItem() {
    const ITEM = document.createElement("h5");
    ITEM.innerText = "Item";
    document.getElementById(`lista-itens`).appendChild(ITEM);
    window.scrollTo(0, 2000);
}

function moverLista(numero1, numero2) {
    const node = document.getElementById(`lista${numero2}`).lastElementChild;
    document.getElementById(`lista${numero1}`).appendChild(node);
    window.scrollTo(0, 800);
}