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
let base = 16; // valor inicial

// Substitua sua função mudarContraste por esta:
function mudarContraste() {

    // Apenas alterna a classe principal no body
    body.classList.toggle('high-contrast');
    navMenu.classList.toggle('navMenuBlack');
    
    // Salva o estado atual (true ou false) no localStorage
    localStorage.setItem('altoContrasteAtivo', body.classList.contains('high-contrast'));
}

function carregarPreferenciaContraste() {
    // Verifica se o valor salvo no localStorage é 'true'
    const altoContrasteAtivo = localStorage.getItem('altoContrasteAtivo') === 'true';

    // Se estava ativo, chama a função mudarContraste() para aplicar os estilos
    if (altoContrasteAtivo) {
        mudarContraste();
    }
}

function aumentarFonteTexto() {
    base = Math.min(base + 2, 30); // limite de 30px base
    html.style.fontSize = base + "px";
}

function diminuirFonteTexto() {
    base = Math.max(base - 2, 10); // limite mínimo 10px base
    html.style.fontSize = base + "px";
}

// Adicione esta linha no final do seu arquivo JS
document.addEventListener('DOMContentLoaded', carregarPreferenciaContraste);