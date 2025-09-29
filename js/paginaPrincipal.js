let navMenu = document.getElementById('navMenuPrincipal');
let body = document.getElementById('body');
let h1 = document.querySelector('h1');
let h2 = document.querySelectorAll('h2');
let paragrafos = document.querySelectorAll('p');
let imagens = document.querySelectorAll(".sectionImg img");

const incremento = 10;
const mAX_H = 150;
const mAX_P = 60;
const min_H = 60;
const min_P = 20;
const incrementoImg = 20;
const maxImg = 700;
const minImg = 200;

let html = document.documentElement;
let base = 16; // valor inicial

function mudarContraste() {
    navMenu.classList.toggle("navMenuBlack");
    body.classList.toggle('bodyBlack');
    document.body.classList.toggle("high-contrast");
    h1.classList.toggle('tituloBlack');
    document.h2.classList.toggle('tituloBlack');
    console.log("Mudou!")
}

function aumentarFonteTexto() {
    base = Math.min(base + 2, 30); // limite de 30px base
    html.style.fontSize = base + "px";
}

function diminuirFonteTexto() {
    base = Math.max(base - 2, 10); // limite mínimo 10px base
    html.style.fontSize = base + "px";
}