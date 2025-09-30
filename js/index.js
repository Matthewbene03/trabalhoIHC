document.addEventListener('DOMContentLoaded', function() {
    
    const contrasteButton = document.getElementById('btn-alto-contraste');
    const iconeContraste = document.getElementById('icone-contraste');
    const body = document.body;

    if (!contrasteButton || !iconeContraste) {
        return;
    }


    function atualizarIconeContraste() {
        if (body.classList.contains('alto-contraste')) {
            iconeContraste.src = '../img/icone-contraste-sol.png';
            iconeContraste.alt = 'Desativar modo de alto contraste (ativar modo claro)';
        } else {
            iconeContraste.src = '../img/icone-contraste-lua.png';
            iconeContraste.alt = 'Ativar modo de alto contraste (ativar modo escuro)';
        }
    }


    function toggleAltoContraste() {
        body.classList.toggle('alto-contraste');
        localStorage.setItem('altoContrasteAtivo', body.classList.contains('alto-contraste'));
        atualizarIconeContraste();
    }

    function carregarPreferenciaContraste() {
        const altoContrasteAtivo = localStorage.getItem('altoContrasteAtivo') === 'true';
        if (altoContrasteAtivo) {
            body.classList.add('alto-contraste');
        }
        atualizarIconeContraste();
    }

    contrasteButton.addEventListener('click', toggleAltoContraste);
    carregarPreferenciaContraste();
})

document.addEventListener('DOMContentLoaded', () => {
    const btnFontPlus = document.getElementById('btn-font-plus');
    const btnFontMinus = document.getElementById('btn-font-minus');

    let fontSize = parseInt(getComputedStyle(document.documentElement).fontSize) || 16;

    if (btnFontPlus) {
        btnFontPlus.addEventListener('click', () => {
            fontSize += 2;
            document.documentElement.style.fontSize = fontSize + 'px';
        });
    }

    if (btnFontMinus) {
        btnFontMinus.addEventListener('click', () => {
            if (fontSize > 10) {
                fontSize -= 2;
                document.documentElement.style.fontSize = fontSize + 'px';
            }
        });
    }
});