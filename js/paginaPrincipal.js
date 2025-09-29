let navMenu = document.getElementById('navMenuPrincipal');
let body = document.getElementById('body');
let h1 = document.querySelector('h1');
let h2 = document.querySelectorAll('h2');

function mudarContraste() {
    navMenu.classList.toggle("navMenuBlack");
    body.classList.toggle('bodyBlack');
    document.body.classList.toggle("high-contrast");
    h1.classList.toggle('tituloBlack');
    document.h2.classList.toggle('tituloBlack');
    console.log("Mudou!")
}