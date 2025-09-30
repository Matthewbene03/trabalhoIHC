document.addEventListener('DOMContentLoaded', () => {
    const btnFontPlus = document.getElementById('btn-font-plus');
    const btnFontMinus = document.getElementById('btn-font-minus');

    // Tamanho inicial da fonte
    let fontSize = parseInt(getComputedStyle(document.documentElement).fontSize) || 16;

    // --- Aumentar fonte ---
    if (btnFontPlus) {
        btnFontPlus.addEventListener('click', () => {
            fontSize += 2;
            document.documentElement.style.fontSize = fontSize + 'px';
        });
    }

    // --- Diminuir fonte ---
    if (btnFontMinus) {
        btnFontMinus.addEventListener('click', () => {
            if (fontSize > 10) {
                fontSize -= 2;
                document.documentElement.style.fontSize = fontSize + 'px';
            }
        });
    }
});
