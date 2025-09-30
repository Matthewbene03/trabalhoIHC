let navMenu = document.getElementById('navMenuPrincipal');
let body = document.getElementById('body');
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
let base = 16;

function mudarContraste() {

    body.classList.toggle('high-contrast');
    navMenu.classList.toggle('navMenuBlack');
    
    localStorage.setItem('altoContrasteAtivo', body.classList.contains('high-contrast'));
}

function carregarPreferenciaContraste() {
    const altoContrasteAtivo = localStorage.getItem('altoContrasteAtivo') === 'true';

    if (altoContrasteAtivo) {
        mudarContraste();
    }
}

function aumentarFonteTexto() {
    base = Math.min(base + 2, 30);
    html.style.fontSize = base + "px";
}

function diminuirFonteTexto() {
    base = Math.max(base - 2, 10);
    html.style.fontSize = base + "px";
}

document.addEventListener('DOMContentLoaded', carregarPreferenciaContraste);