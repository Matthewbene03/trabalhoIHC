let navMenu = document.getElementById('navMenuPrincipal');
let body = document.getElementById('body');
let h1 = document.querySelector('h1');
let h2 = document.querySelectorAll('h2');
let paragrafos = document.querySelectorAll('p');

const incremento = 10;
const mAX_H = 150;
const mAX_P = 60;
const min_H = 60;
const min_P = 20;

function mudarContraste() {
    navMenu.classList.toggle("navMenuBlack");
    body.classList.toggle('bodyBlack');
    document.body.classList.toggle("high-contrast");
    h1.classList.toggle('tituloBlack');
    document.h2.classList.toggle('tituloBlack');
    console.log("Mudou!")
}

function aumentarFonteTexto() {
    if (parseFloat(window.getComputedStyle(h1).fontSize) === mAX_H) {
        console.log("h1 chegou no limite");
    } else {
        const novoTamanho = Math.min((parseFloat(window.getComputedStyle(h1).fontSize) + incremento), mAX_H);
        h1.style.fontSize = `${novoTamanho}px`;
        console.log(window.getComputedStyle(h1).fontSize);
    }

    h2.forEach(el => {
        if (parseFloat(window.getComputedStyle(el).fontSize) === mAX_H) {
            console.log("h2 chegou no limite");
        } else {
            const novoTamanho = Math.min((parseFloat(window.getComputedStyle(el).fontSize) + incremento), mAX_H);
            el.style.fontSize = `${novoTamanho}px`;
            console.log(window.getComputedStyle(el).fontSize);
        }
    });


    paragrafos.forEach(el => {
        if (parseFloat(window.getComputedStyle(el).fontSize) === mAX_P) {
            console.log("p chegou no limite");
        } else {
            const novoTamanho = Math.min((parseFloat(window.getComputedStyle(el).fontSize) + incremento), mAX_P);
            el.style.fontSize = `${novoTamanho}px`;
            console.log(window.getComputedStyle(el).fontSize);
        }
    });

    console.log("Aumentou!")
}

function diminuirFonteTexto() {
    if (parseFloat(window.getComputedStyle(h1).fontSize) === min_H) {
        console.log("h1 chegou no limite minimo");
    } else {
        const novoTamanho = Math.max((parseFloat(window.getComputedStyle(h1).fontSize) - incremento), min_H);
        h1.style.fontSize = `${novoTamanho}px`;
        console.log(window.getComputedStyle(h1).fontSize);
    }

    h2.forEach(el => {
        if (parseFloat(window.getComputedStyle(el).fontSize) === min_H) {
            console.log("h2 chegou no limite minimo");
        } else {
            const novoTamanho = Math.max((parseFloat(window.getComputedStyle(el).fontSize) - incremento), min_H);
            el.style.fontSize = `${novoTamanho}px`;
            console.log(window.getComputedStyle(el).fontSize);
        }
    });


    paragrafos.forEach(el => {
        if (parseFloat(window.getComputedStyle(el).fontSize) === min_P) {
            console.log("p chegou no limite minimo");
        } else {
            const novoTamanho = Math.max((parseFloat(window.getComputedStyle(el).fontSize) - incremento), min_P);
            el.style.fontSize = `${novoTamanho}px`;
            console.log(window.getComputedStyle(el).fontSize);
        }
    });

    console.log("Diminuiu!")
}